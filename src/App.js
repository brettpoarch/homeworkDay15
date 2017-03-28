import React from 'react'
import './App.css'


export default React.createClass({
  getInitialState: function(){
    return{
      task: '',
      list: [],
      idTag: 0

    }
  },

  handleChange: function(e){
    this.setState({
      task: e.target.value
    })
  },

  handleSubmit: function(e){
    e.preventDefault()
    this.setState({
      list: [this.state.task, ...this.state.list],
      task: '',
      idTag: this.state.id + 1
    })
  },

  handleClick: function(e){
    this.setState({
      list: this.state.list.filter(function(value) { 
        return value !== e.target.value 
      })
    })
  },

  render: function(){
    return(
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' className='inputBox'placeholder='What needs to be done?' value={this.state.task} onChange={this.handleChange}></input>
        </form>
        <ul>
          {this.state.list.map(function(list, idTag){
            return <li key={'id' + idTag}><input type='checkbox' id={'id' + idTag} /><label htmlFor={'id' + idTag}>{list}</label><button value={list} onClick={this.handleClick}>X</button></li>
          }.bind(this))}
        </ul>
      </div>
   )
  }
})