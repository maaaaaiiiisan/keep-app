import React from "react";
import './Form.scss';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = { content:"" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleFormSubmit(e) {
         e.preventDefault();
    }
        
    render(){
        return (
            <div className="form">      
                <form onSubmit={this.handleFormSubmit}>
                <input className="input-box"  placeholder="メモを入力..."　value={this.state.content} onChange={this.handleChange}  />
                </form>
                <div className="form-bottom">
                <i className="material-icons">color_lens</i>
                <i className="material-icons">label</i>
                <button className="input-close" type="submit" onClick={this.handleSubmit}>作成</button> 
                </div>
            </div>
        );
    }

    handleChange = event => {
        // const inputText = event.target.value
        // this.setState({ inputText: inputText })
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