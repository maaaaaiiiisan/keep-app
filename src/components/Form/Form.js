import React from "react";
import './Form.scss';

class Form extends React.Component {
    constructor(props){
        super(props);
        // this.state = { content:"" };
        this.state = {
            content:"",
          };
    }
        
    render(){
        const { value } = this.state;
        const { onChange } = this.state;
        const { onClick } = this.state;
        return (
            <div className="form">      
                <div className="form-top">
                    <input className="input-box"  placeholder="メモを入力..."　 value={value} onChange={onChange}  />
                </div>
                <div className="form-bottom">
                <i className="material-icons">color_lens</i>
                <i className="material-icons">label</i>
                <button className="input-close" type="submit" onClick={onClick}>作成</button> 
                </div>
            </div>
        );
    }
}
export default Form;