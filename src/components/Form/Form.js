import React from "react";
import './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
        };
    }



    render() {
        return (
            <div className="form" style={{backgroundColor: this.props.color}}>
                <div className="form-top" >
                    <input className="input-box" placeholder="メモを入力..." onChange={this.props.changeText} style={{backgroundColor: this.props.color}}/>
                </div>
                <div className="form-bottom">
                <button onClick={() => this.props.changeFormColor()} ><i className="material-icons">color_lens</i></button>
                    <button onClick={() => this.props.changeFormColor('#f28b82')}><i className="material-icons pink">color_lens</i></button>
                    <button onClick={() => this.props.changeFormColor('#d7aefb')}><i className="material-icons purple">color_lens</i></button>
                    <button> <i className="material-icons">label</i></button>
                    <button className="input-close" type="submit" onClick={this.props.addMemo}>作成</button>
                </div>
            </div>
        );
    }
}
export default Form;