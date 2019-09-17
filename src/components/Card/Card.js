import React, { Component } from 'react'

class Card extends Component {
  state = {
    bgColor: '',
    isEditMode: false,
    content: this.props.task.content
  }
  changeColor = (color = "#ffffff") => {
    this.setState({
      bgColor: color
    })
  }

  toggleEditMode = () => {
    this.setState({
      isEditMode: !this.state.isEditMode
    })
  }

  handleEditDone = () => {
    this.setState({
      isEditMode: false
    })
  }

  changeText = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    return (
      <li className="list" key={this.props.task.id} style={{backgroundColor:this.state.bgColor}}>
        {this.state.isEditMode ? 
          <input 
            className="input-box" 
            onChange={this.changeText} 
            key={ this.props.task.id } 
            value={this.state.content} 
            ref="text-cell"
            autoFocus={true}
          /> 
          :
          <p>{this.state.content}</p>
        }
        <div className="list-buttom">
          <button onClick={this.toggleEditMode}>
            <i className="material-icons">edit</i>
          </button>
          {this.state.isEditMode && 
            <button onClick={this.handleEditDone}>
              <i className="material-icons">done</i>
            </button>
          }
          <button onClick={() => this.changeColor()}><i className="material-icons">color_lens</i></button>
          <button onClick={() => this.changeColor('#f28b82')}><i className="material-icons pink">color_lens</i></button>
          <button onClick={() => this.changeColor('#d7aefb')}><i className="material-icons purple">color_lens</i></button>
          <button><i className="material-icons">label</i></button>
          <button onClick={() => { this.deleteMemo(this.props.task.id) }}><i className="material-icons">delete</i></button>
        </div>
      </li>
    )
  }
}

export default Card