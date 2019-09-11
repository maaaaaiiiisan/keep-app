import React from 'react';
import Form from "./components/Form";
import List from "./components/List";
import './App.css';

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
        <h2>MemoApp</h2>
        <Form addMemo={this.addMemo} />
        <List memos={this.state.memos} deleteMemo={this.deleteMemo} />
      </div>
    );
  }
}

export default App;
