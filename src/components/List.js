import React from "react";
import './List.scss';

class List extends React.Component {
    constructor(props) {
        super(props);
      }

    render(){
        const list = this.props.memos.map(memo =>{
            return(
                <li className="list">
                    {memo.content}{" "}
                    <button onClick={() => this.props.deleteMemo(memo.id)}>delete</button>
                </li>
                
            );
        }); 
           return(
               <div className="list">
                   <ul>{list}</ul>
                </div>
           );
        }
}

export default List;