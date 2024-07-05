import logo from './logo.svg';
// import './App.css';

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {useEffect} from "react";
import Home from "./components/Home";

function App(props) {

  const dispatch = useDispatch();
  const newCount = useSelector((state) => state.counter.count);

  // event handler
  const handleIncrease = () => {
    dispatch(increaseCounter());
  }

  const fetchAllUsers = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : [];
    console.log("res", data);
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo"/>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*      className="App-link"*/}
      {/*      href="https://reactjs.org"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}

      {/*  <div>Count: {newCount}</div>*/}

      {/*  <button onClick={() => handleIncrease() }>Increase Count</button>*/}

      {/*  <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>*/}
      {/*</header>*/}

      <Home />
    </div>
  );
}

export default App;