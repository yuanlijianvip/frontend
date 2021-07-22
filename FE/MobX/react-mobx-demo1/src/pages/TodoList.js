import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  render() {
    return (
      <div>
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
