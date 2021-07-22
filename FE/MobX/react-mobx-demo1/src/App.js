import './App.css';
import TimerView from './pages/TimerView';
import TodoList from './pages/TodoList';
import appState from './store/appState';
import TodoStore from './store/todoStore';

function App() {
  return (
    <div className="App">
      {/* <TimerView appState={appState}/> */}
      <TodoList todoStore={TodoStore}/>
    </div>
  );
}

export default App;
