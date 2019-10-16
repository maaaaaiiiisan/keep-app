import React from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import icon from "./icon.png";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.fetchTasks = this.fetchTasks.bind(this);
    this.changeText = this.changeText.bind(this);
    this.addMemo = this.addMemo.bind(this);
    this.deleteMemo = this.deleteMemo.bind(this);
    this.editMemo = this.editMemo.bind(this);
    this.state = {
      showInput: false,
      black: true,
      color: null,
      tasks: []
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  async fetchTasks() {
    await fetch("http://localhost:3000/tasks")
      .then(response => response.json())
      .then(json => {
        this.setState({ tasks: json });
      });
  }

  changeText = event => {
    console.log("changeText");
    const inputText = event.target.value;
    this.setState({ inputText: inputText });
    console.dir(inputText);
  };

  changeFormColor = (color = "#ffffff") => {
    this.setState({
      color: color
    });
    console.log(this.state.color);
  };

  addMemo = () => {
    this.setState({ showInput: false });
    console.log("addMemo");
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: this.state.inputText,
        color: this.state.color
      })
    }).then(this.fetchTasks);
  };

  deleteMemo(taskId) {
    this.setState({ showInput: false });
    console.log("delete");
    fetch("http://localhost:3000/tasks/" + taskId, {
      method: "DELETE"
    }).then(this.fetchTasks);
  }

  editMemo(taskId) {
    this.setState({ showInput: true });
    let input = ReactDOM.findDOMNode(this.refs["text-cell"]);
    input && input.focus();
  }

  saveMemo = (taskId, content, color) => {
    fetch("http://localhost:3001/tasks/" + taskId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content, color })
    });
  };

  render() {
    const list = this.state.tasks.map(task => {
      const showInput = this.state.showInput;
      let input;
      if (showInput) {
        input = (
          <input
            className="input-box"
            onChange={this.changeText}
            key={task.id}
            ref="text-cell"
          />
        );
      } else {
        input = (
          <input
            className="input-box"
            onChange={this.changeText}
            key={task.id}
            value={task.content}
          />
        );
      }

      return (
        <Card
          task={task}
          color={this.state.color}
          tasks={this.state.tasks}
          key={task.id}
          changeText={this.changeText}
          deleteMemo={this.deleteMemo}
          fetchTasks={this.fetchTasks}
          saveMemo={this.saveMemo}
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
        <Form
          changeFormColor={this.changeFormColor}
          color={this.state.color}
          tasks={this.state.tasks}
          saveMemo={this.saveMemo}
          changeText={this.changeText}
          addMemo={this.addMemo}
        />
        <div className="list-container">
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}

export default App;
