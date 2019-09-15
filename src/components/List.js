import React from "react";
import './List.scss';

class List extends React.Component {
    render(){
        const list = this.props.memos.map(memo =>{
            return(
                <li className="list">
                    {memo.content}{" "}
                    <div className="list-buttom">
                        <button><i class="material-icons">color_lens</i></button>
                        <button><i class="material-icons">label</i></button>
                        <button onClick={() => this.props.deleteMemo(memo.id)}><i class="material-icons">delete</i></button>
                    </div>
                </li>
                
            );
        }); 
           return(
               <div className="list-container">
                   <ul>{list}</ul>
                </div>
           );
        }
}

export default List;