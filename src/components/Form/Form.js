import React from "react";
import './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content:"" };
        this.state = {
            content: "",
        };
    }

    render() {
        return (
            <div className="form">
                <div className="form-top">
                    <input className="input-box" placeholder="メモを入力..." onChange={this.props.changeText} />
                </div>
                <div className="form-bottom">
                    <button><i className="material-icons">color_lens</i></button>
                    <button><i className="material-icons pink">color_lens</i></button>
                    <button><i className="material-icons purple">color_lens</i></button>
                    <button> <i className="material-icons">label</i></button>
                    <button className="input-close" type="submit" onClick={this.props.addMemo}>作成</button>
                </div>
            </div>
        );
    }
}
export default Form;