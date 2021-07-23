import logo from './logo.svg';
import './App.css';
import HookPage from './pages/HookPage';
import UseMemoPage from './pages/UseMemoPage';
import UseCallbackPage from './pages/UseCallbackPage';

function App() {
  return (
    <div className="App">
     {/* <HookPage></HookPage> */}
     {/* <UseMemoPage></UseMemoPage> */}
     <UseCallbackPage></UseCallbackPage>
    </div>
  );
}

export default App;
