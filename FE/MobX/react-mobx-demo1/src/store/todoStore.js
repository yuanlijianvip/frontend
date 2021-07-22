import {configure, observable, action, computed, autorun} from "mobx";

//不允许在动作外部修改状态
configure({enforceActions: "observed"});

class TodoStore {
  @observable todos = [
    {
      id: "0",
      finished: false,
      title: "任务1"
    },
    {
      id: "1",
      finished: true,
      title: "任务2"
    },
    {
      id: "2",
      finished: false,
      title: "任务3"
    },
  ]

  @computed get unfinishedCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action change(todo) {
    todo.finished =!todo.finished;
  }
}

const todoStore = new TodoStore();

autorun(()=> {
  console.log("剩余任务：" + todoStore.unfinishedCount + "个");
})

export default todoStore;