import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      count: 0
    }
  }

  render() {
    const {input, count} = this.state;
    return (
      <div>
        <input type="text" value={input} onChange={e => this.setState({input: e.target.value})}/>
        <button onClick={()=>this.setState({count: count+1})}>add click {count}</button>
        {this.props.todoStore.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            change={this.props.todoStore.change}
          />
        ))}
        <p>未完成任务：{this.props.todoStore.unfinishedCount}个</p>
      </div>
    );
  }
}

export default TodoList;

const Child = React.memo(props => {
  console.log("child props");
  return <div>Child</div>
});

const Todo = observer(({ todo, change }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.finished}
        onChange={() => (change(todo))}
        // onChange={() => (todo.finished = !todo.finished)}
      />
      {todo.title}
    </div>
  );
});
