import React from 'react'



const remove = React.createClass({

	handleClick: function(e){
    this.setState({
      list: this.state.list.filter(function(task) { 
        return task !== e.target.value 
      })
    })
  },

	render: function(){
		return (
			<li><input type='checkbox' onCheck={this.handleCheck} />{list}<button onClick={this.handleClick}>X</button></li>
		)
	}
})