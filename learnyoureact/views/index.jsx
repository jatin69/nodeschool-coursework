import React from 'react';

export default class TodoBox extends React.Component{
  render() {
     return (
                <div className="todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
            );
  }
}

class TD extends React.Component {
	render () {
		return (
			<td style={{border: "1px solid black"}}>
			{this.props.children}
			</td>
			);
	}
}

class Todo extends React.Component {
  render () {
  	return (
  		<tr>
  		<TD>{this.props.title}</TD>
  		<TD>{this.props.children}</TD>
  		</tr>
  		);
  }
}

class TodoList extends React.Component {
  render() {
  	return ( 		
		    <div className="todoList">
		       <table style={{border: "2px solid black"}}>
                    <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    </tbody>
            	</table>
		    </div>
  		);
  }
}

class TodoForm extends React.Component {
  render() {
  	return ( 		
		     <div className="todoForm">
		      I am a TodoForm.
		    </div>
  		);
  }
}