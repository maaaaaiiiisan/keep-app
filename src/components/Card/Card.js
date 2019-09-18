import React from "react";
import './Card.scss';

class Card extends React.Component {
    state = {
        bgColor: '',
        isEditMode: false,
        content: this.props.task.content
    }

    toggleEditMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        })
    }

    handleEditDone = () => {
        this.setState({
            isEditMode: false
        })
    }

    changeText = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    changeColor = (color = "#ffffff") => {
        this.setState({
            bgColor: color
        })
    }

    render() {
        return (
            <li className="list" key={this.props.task.id} style={{ backgroundColor: this.state.bgColor }}>
                {this.state.isEditMode ?
                    <input
                        className="input-box"
                        onChange={this.changeText}
                        key={this.props.task.id}
                        ref="text-cell"
                        autoFocus={true}
                        value={this.state.content}
                    />
                    :
                    <p>{this.state.content}</p>
                }
                <div className="list-buttom">
                    <button onClick={this.toggleEditMode}><i className="material-icons">edit</i></button>
                    {this.state.isEditMode &&
                        <button onClick={this.handleEditDone}><i className="material-icons">done</i></button>
                    }
                    <button onClick={() => this.changeColor()} ><i className="material-icons">color_lens</i></button>
                    <button onClick={() => this.changeColor('#f28b82')}><i className="material-icons pink">color_lens</i></button>
                    <button onClick={() => this.changeColor('#d7aefb')}><i className="material-icons purple">color_lens</i></button>
                    <button><i className="material-icons">label</i></button>
                    <button onClick={() => this.props.deleteMemo(this.props.task.id)}><i className="material-icons">delete</i></button>
                </div>
            </li>
        );
    }
}
export default Card;