import React from 'react';
// import Form from "./components/Form";
import List from "./components/List";
import './App.scss';
import icon from './icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.changeText = this.changeText.bind(this);
    this.addMemo = this.addMemo.bind(this);
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
    const inputText = event.target.value
    this.setState({ inputText: inputText })
  }

  addMemo = () => {
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
    fetch("http://localhost:3001/tasks/" + taskId, {
      method: "DELETE"
    })
      .then(this.fetchTasks)
  }

  render() {
    return (
      <div>
        <div className="header">
          <i className="material-icons">menu</i>
          <img src={icon} className="icon" alt="" />
          <h2>Keep</h2>
        </div>
        <div className="form">
          <div className="form-top">
            <input className="input-box" placeholder="メモを入力..." 　onChange={this.changeText} />
          </div>
          <div className="form-bottom">
            <i className="material-icons">color_lens</i>
            <i className="material-icons">label</i>
            <button className="input-close" type="submit" onClick={this.addMemo}>作成</button>
          </div>
        </div>
        }
        {/* <Form value={this.state.inputText} onClick={this.addMemo} onChange={this.changeText} /> */}
        <List tasks={this.state.tasks} onClick={this.updateMemo} deleteMemo={this.deleteMemo} />
      </div>
    );
  }
}


export default App;
