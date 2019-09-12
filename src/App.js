import React from 'react';
import Form from "./components/Form";
import List from "./components/List";
import './App.scss';
import icon from './icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      memos: [],
      nextId: 0
    };
  }

  addMemo = content => {
    this.setState({
      memos: [...this.state.memos, { id: this.state.nextId, content:content }],
      nextId: this.state.nextId + 1
    });
  };

  deleteMemo = id => {
    const filteredArray = this.state.memos.filter(memo =>{
      return memo.id !== id;
    });
    this.setState({ memos: filteredArray });
  };

  render(){
    return(
      <div>
        <div className="header">
          <img src={icon} className="icon"/>
          <h2>Keep</h2>
        </div>
        <Form addMemo={this.addMemo} />
        <List memos={this.state.memos} deleteMemo={this.deleteMemo} />
      </div>
    );
  }
}

export default App;
