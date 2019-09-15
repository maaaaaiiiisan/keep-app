import React from "react";
import './List.scss';

class List extends React.Component {
    render(){
            const list = this.props.tasks.map(task =>{
                return(
                <li className="list" key={task.id}>
                    {task.content}{" "}
                    <div className="list-buttom">
                        <button onClick={() => this.props.updateMemo(task.id)}><i className="material-icons">edit</i></button>
                        <button><i className="material-icons">color_lens</i></button>
                        <button><i className="material-icons">label</i></button>
                        <button onClick={() => this.props.deleteMemo(task.id)}><i className="material-icons">delete</i></button>
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