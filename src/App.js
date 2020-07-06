import React from 'react';
import TodoList from './components/TodoList';

const tasks = [
  {
    id: 11124242,
    task: 'Clean Room',
    completed: false
  },
  {
    id: 25462346,
    task: 'Do Laundry',
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
        todo: '',
        tasks
    }
  }


  formHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
