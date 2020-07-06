import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input 
                    type= 'text'
                    name='todo'
                    value={this.state.value}
                    onChange={this.props.onChange}/>
                    <button>Add Task</button>
                </form>

                <button
                onClick={this.props.clearTasks}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm