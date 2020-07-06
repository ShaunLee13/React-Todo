// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }
//Length of Tasks = 0 ? <h2>No More Tasks!</h2><h3>...for now.</h3> : map
    render() {
        return(
            <div>
                {this.props.tasks.length === 0 ? <div><h2>No More Tasks!</h2><h3>...for now.</h3></div>: this.props.tasks.map(item => (
                    <Todo 
                    key={item.id} 
                    task={item.task}
                    id={item.id}
                    completed={item.completed}
                    toggle={this.props.toggle}/>
                    ))}
            </div>
        )
    }
}

export default TodoList