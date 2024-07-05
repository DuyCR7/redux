import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import store from "./redux/store";

function App(props) {

  // event handler
  const handleIncrease = () => {
    // dispatch action
    props.increaseCounter();

    // dispatch action
    // store.dispatch({
    //   type: "INCREMENT"
    // })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>Count: {props.count}</div>

        <button onClick={() => handleIncrease() }>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </header>
    </div>
  );
}

// map state (redux store) + props react (lay trong store cua redux de hien thi giao dien)
const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

// map dispatch (redux) to props react
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
