import React from "react";
import './Card.scss';

class Card extends React.Component {
    state = {
        isEditMode: false,
        content: this.props.task.content,
        color: this.props.task.color,
        tasks: this.props.tasks,
        task: this.props.task
    }

    toggleEditMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        })
    }

    handleEditDone = () => {
        this.setState({
            isEditMode: false,
        })
        this.props.saveMemo(this.props.task.id,this.state.content, this.state.color);
    }

    changeText = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    changeColor = (color = "#ffffff") => {
        this.setState({
            color : color
        });
        this.props.saveMemo(this.props.task.id,this.state.content, this.state.color);
        console.log(this.state.color);
        console.log(this.state.tasks);
    }

    render() {
        return (
            <li className="list" key={this.props.task.id} style={{ backgroundColor: this.state.color }}>
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
                    <button onClick={() => this.props.deleteMemo(this.props.task.id)}><i className="material-icons">delete</i></button>
                </div>
            </li>
        );
    }
}
export default Card;