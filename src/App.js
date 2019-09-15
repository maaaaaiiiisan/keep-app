import React from 'react';
import Form from "./components/Form";
import List from "./components/List";
import './App.scss';
import icon from './icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.addMemo = this.addMemo.bind(this);
    this.state = {
      // tasks: [],
      tasks: [],
      nextId: 0
    };
  }

  // componentWillMount(){
  //   this.fetchTasks()
  // }
  // fetchTasks(){
  //   fetch("http://localhost:3001/tasks") // データを取得しに行く
  //   .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
  //   .then( json => { // オブジェクトに変換したレスポンスを受け取り、
  //     this.setState({ tasks: json }) // Stateを更新する
  //   })
  // }

  addMemo(content){
    this.setState({
      tasks: [...this.state.tasks, { id: this.state.nextId, content:content }],
      nextId: this.state.nextId + 1
    });
  };

  updateMemo(taskId){
      fetch("http://localhost:3001/tasks/"+taskId, {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then( this.fetchTasks )
    }

    deleteMemo(taskId) {
      fetch("http://localhost:3001/tasks/"+taskId, {
        method: "DELETE"
      })
      .then( this.fetchTasks )
    }

  // addMemo = content => {
  //   this.setState({
  //     memos: [...this.state.memos, { id: this.state.nextId, content:content }],
  //     nextId: this.state.nextId + 1
  //   });
  // };

  // updateMemo = content => {
  //   this.setState({
  //     memos: [...this.state.memos, { content:content }],
  //     nextId: this.state.nextId
  //   });
  // }

  // deleteMemo = id => {
  //   const filteredArray = this.state.memos.filter(memo =>{
  //     return memo.id !== id;
  //   });
  //   this.setState({ memos: filteredArray });
  // };

  render(){
    return(
    //   <div className="App">
    //   <div className="tasks">
    //   {
    //     this.state.tasks.map( task => {
    //         return <div className="task" key={ task.id }>{ task.body }</div>
    //     })
    //   }
    //   </div>
    // </div>
      <div>
        <div className="header">
          <i className="material-icons">menu</i>
          <img src={icon} className="icon" alt=""/>
          <h2>Keep</h2>
          
        </div>
        <Form addMemo={this.addMemo}  />
        <List tasks={this.state.tasks} updateMemo={this.updateMemo} deleteMemo={this.deleteMemo} />
      </div>
    );
  }
}

export default App;
