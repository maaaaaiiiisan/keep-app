import React from "react";
import './Form.scss';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = { content:"メモを入力..." };
    }

    render(){
        return (
            <div className="form">      
                <form onSubmit={this.handleSubmit}>
                <input className="input-box" value={this.state.content} onChange={this.handleChange} />
                <input className="input-close"type="submit" value="閉じる" /> 
                </form>
            </div>
        );
    }

    handleChange = event => {
        const content = event.target.value;
        this.setState({ content: content });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.addMemo(this.state.content);
        this.setState({ content: ""});
    };
}
export default Form;