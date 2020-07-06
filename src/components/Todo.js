import React from 'react';
import './Todo.css'


class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state= {

        }
    }

    render() {
        return(
            <div
            className={`task${this.props.completed ? ' complete' : ''}`}
            onClick={() => this.props.toggle(this.props.id)}>
                <p>{this.props.task}</p>
            </div>
        )
    }
}

export default Todo