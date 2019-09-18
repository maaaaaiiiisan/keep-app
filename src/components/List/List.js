import React from "react";
import './List.scss';

class List extends React.Component {
    render(){
        const { onClick } = this.state;
            const list = this.props.tasks.map(task =>{
                return(
                <li className="list" key={task.id}>
                    {task.content}{" "}
                    <div className="list-buttom">
                        <button><i className="material-icons">edit</i></button>
                        <button><i className="material-icons">color_lens</i></button>
                        <button><i className="material-icons">label</i></button>
                        <button onClick={onClick}><i className="material-icons">delete</i></button>
                    </div>
                </li>
                
            );
        }); 
        
           return(
               <div className="list-container">
                   <ul onClick={onClick}>{list}</ul>
                </div>
           );
}
}

export default List;