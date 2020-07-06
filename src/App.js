import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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
  
  //Event Handler for ToDo Items
    toggleComplete = taskId => {
      console.log(taskId)
      this.setState({
        tasks: this.state.tasks.map(task => {
          if (taskId === task.id) {
            return {
              ...task,
              completed: !task.completed
            };
          }
          return task
        })
      })
    }

//Event Handlers for ToDo Form
  setTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      task: item,
      completed: false
    };  
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });  
  };    
  formHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
  }
  formSubmit = e => {
    e.preventDefault()
    this.setState({ item: ''})
    this.setTask(e, this.state.todo)
  }
  clearComplete = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        tasks={this.state.tasks}
        toggle={this.toggleComplete}/>
        <TodoForm 
        todo={this.state.todo}
        onChange={this.formHandler}
        onSubmit={this.formSubmit}
        clearTasks={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
