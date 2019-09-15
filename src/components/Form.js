import React from "react";
import './Form.scss';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = { content:"" };
    }

    render(){
        return (
            <div className="form">      
                <form onSubmit={this.handleSubmit}>
                <input className="input-box"  placeholder="メモを入力..."　value={this.state.content} onChange={this.handleChange} />
                </form>
                <div className="form-bottom">
                <i className="material-icons">color_lens</i>
                <i className="material-icons">label</i>
                <input className="input-close" type="submit" value="作成" /> 
                </div>
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