import './App.css';
import UseEffect from './Components/UseEffect';
import UseLayoutEffect from './Components/UseLayoutEffect';
import UseReducer from './Components/UseReducer';
import UseRef from './Components/UseRef';
import UseState from './Components/UseState';

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hooks Practice</h1>
      <hr />
      <UseState />
      <hr />
      <UseReducer />
      <hr />
      <UseEffect />
      <hr />
      <UseRef />
      <hr />
      <UseLayoutEffect />
      <hr />
    </>
  );
}

export default App;
