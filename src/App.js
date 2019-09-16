import React from 'react';
import Form from "./components/Form";
import List from "./components/List";
import './App.scss';
import icon from './icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
    // this.handleChange = this.handleChange.bind(this);
    // this.fetchTasks = this.fetchTasks.bind(this);
    this.changeText = this.changeText.bind(this);
    this.addMemo = this.addMemo.bind(this);
    this.state = {
      tasks: []
    };
  }

  async componentDidMount(){
    await fetch("http://localhost:3001/tasks") // データを取得しに行く
    .then((response) => response.json()) // json型のレスポンスをオブジェクトに変換する
    .then((json) => { // オブジェクトに変換したレスポンスを受け取り、
      this.setState({ 
        tasks: json
     }); // Stateを更新する
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  changeText = (event)=> {
    console.log("bbb");
    const inputText = event.target.value
    this.setState({ inputText: inputText })
    console.dir(inputText);
  }

  addMemo = () => {
    console.log("aaa");
   fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: this.state.inputText })
    })
    .then( this.fetchTasks )
  }
    deleteMemo(taskId) {
      fetch("http://localhost:3001/tasks/"+taskId, {
        method: "DELETE"
      })
      .then( this.fetchTasks )
    }

  render(){
    return(
      <div>
        <div className="header">
          <i className="material-icons">menu</i>
          <img src={icon} className="icon" alt=""/>
          <h2>Keep</h2>
          
        </div>
        <Form value={this.state.inputText} onClick={this.addMemo} onChange={this.changeText} />
        <List tasks={this.state.tasks} onClick={this.updateMemo} deleteMemo={this.deleteMemo} />
      </div>
    );
  }
}


export default App;
