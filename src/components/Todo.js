import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state= {

        }
    }

    render() {
        return(
            <div>
                <p>{this.props.task}</p>
            </div>
        )
    }
}

export default Todo