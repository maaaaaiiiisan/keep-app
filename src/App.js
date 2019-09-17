import React from 'react';
// import Form from "./components/Form";
// import List from "./components/List";
import Card from './components/Card'
import './App.scss';
import icon from './icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor() {
    super();
    this.fetchTasks = this.fetchTasks.bind(this);
    this.changeText = this.changeText.bind(this);
    this.addMemo = this.addMemo.bind(this);
    this.deleteMemo = this.deleteMemo.bind(this);
    this.state = { 
      showInput: false,
      black: true,
      color: null,
      tasks: []
    };
  }

  componentDidMount() {
    this.fetchTasks()
  }

  async fetchTasks() {
    await fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ tasks: json })
      })
  }

  changeText = (event) => {
    console.log("changeText");
    const inputText = event.target.value
    this.setState({ inputText: inputText });
    console.dir(inputText);
  }

  addMemo = () => {
    this.setState({ showInput: false });
    console.log("addMemo");
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: this.state.inputText })
    })
      .then(this.fetchTasks)
  }

  deleteMemo(taskId) {
    this.setState({ showInput: false });
    console.log("delete");
    fetch("http://localhost:3001/tasks/" + taskId, {
      method: "DELETE"
    })
      .then(this.fetchTasks)
  }

  render() {
    const list = this.state.tasks.map(task => {
      const showInput = this.state.showInput;
      let input;
      if (showInput) {
        input = <input className="input-box" onChange={this.changeText} key={task.id} ref="text-cell" />;
      } else {
        input = <input className="input-box" onChange={this.changeText} key={task.id} value={task.content} />;
      }
      
      return (
        <Card
          key={task.id}
          task={task}
        />
      );
    });
    return (
      <div>
        <div className="header">
          <i className="material-icons">menu</i>
          <img src={icon} className="icon" alt="" />
          <h2>Keep</h2>
        </div>
        <div className="form">
          <div className="form-top">
            <input className="input-box" placeholder="メモを入力..." onChange={this.changeText} />
          </div>
          <div className="form-bottom">
            <button><i className="material-icons">color_lens</i></button>
            <button><i className="material-icons pink">color_lens</i></button>
            <button><i className="material-icons purple">color_lens</i></button>
            <button> <i className="material-icons">label</i></button>
            <button className="input-close" type="submit" onClick={this.addMemo}>作成</button>
          </div>
        </div>
        <div className="list-container">
          <ul>{list}</ul>
        </div>
        {/* <Form value={this.state.inputText} onClick={this.addMemo} onChange={this.changeText} /> */}
        {/* <List tasks={this.state.tasks} onClick={this.deleteMemo} /> */}
      </div>
    );
  }
}

export default App;
