import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props);
      }

    render(){
        const list = this.props.memos.map(memo =>{
            return(
                <li>
                    #{memo.id} - {memo.content}{" "}
                    <button onClick={() => this.props.deleteMemo(memo.id)}>delete</button>
                </li>
            );
        }); 
           return(
               <div>
                   <h2>List</h2>
                   <ul>{list}</ul>
                </div>
           );
        }
}

export default List;