import React from 'react';
// import Form from "./components/Form";
// import List from "./components/List";
import './App.scss';
import icon from './icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor() {
    super();
    this.fetchTasks = this.fetchTasks.bind(this);
    this.changeText = this.changeText.bind(this);
    this.addMemo = this.addMemo.bind(this);
    this.deleteMemo = this.deleteMemo.bind(this);
    this.editMemo = this.editMemo.bind(this);
    this.state = {showInput: false};
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.fetchTasks()
  }

  async fetchTasks() {
    fetch("http://localhost:3001/tasks") // データを取得しに行く
      .then(response => response.json()) // json型のレスポンスをオブジェクトに変換する
      .then(json => { // オブジェクトに変換したレスポンスを受け取り、
        this.setState({ tasks: json }) // Stateを更新する
      })
  }

  changeText = (event) => {
    console.log("changeText");
    const inputText = event.target.value
    this.setState({ inputText: inputText });
    console.dir(inputText);
  }

  addMemo = () => {
    this.setState({showInput: false});
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
    this.setState({showInput: false});
    console.log("delete");
    fetch("http://localhost:3001/tasks/" + taskId, {
      method: "DELETE"
    })
      .then(this.fetchTasks)
  }

  editMemo(taskId) {
    this.setState({showInput: true});
    let input = ReactDOM.findDOMNode(this.refs['text-cell']);
    input && input.focus();
  }

  render() {
    const list = this.state.tasks.map(task => {
      const showInput = this.state.showInput;
      let input;
      if (showInput) {
        input = <input className="input-box" onChange={this.changeText} key={ task.id } ref="text-cell"/>;
      } else {
        input = <input className="input-box" onChange={this.changeText} key={ task.id } value={task.content}/>;
      }

      return (
        <li className="list" key={task.id}>
          {input}
          {/* <input className="input-box" onChange={this.changeText} key={ task.id } value={task.content} ref="text-cell"/> */}
          <div className="list-buttom">
            <button onClick={() => {this.editMemo(task.id)}}><i className="material-icons">edit</i></button>
            <button><i className="material-icons">color_lens</i></button>
            <button><i className="material-icons">label</i></button>
            <button onClick={() => {this.deleteMemo(task.id)}}><i className="material-icons">delete</i></button>
          </div>
        </li>
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
            <i className="material-icons">color_lens</i>
            <i className="material-icons">label</i>
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
