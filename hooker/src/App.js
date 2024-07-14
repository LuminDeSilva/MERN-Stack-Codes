import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';

import './App.css';


//context for demostartion
const MyContext = React.createContext()

const initialState = {count: 0}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

function FunctonalComponent() {
  //state hook
  const [count, setCount] = useState(0)

  //ref hook
  const countRef = useRef()

  //context hook
  const contextValue = useContext(MyContext)

  //reducer hook
  const [state, dispatch] = useReducer(reducer, initialState)

  //effect hook
  useEffect(() => {
    console.log('useEffect: Component did mount');
    countRef.current = count; // sync ref with state

    return () => {
      console.log('useEffect: Component will unmount');
    };
  }, [count]); // only run when count changes. dependency array
  
  const handleIncrement = () => {
    setCount(count + 1);
    dispatch({type: 'increment'});
  };

  return(
    <div>
      <h1>Count (useState): {count}</h1>
      <h1>Count (useReducer): {state.count}</h1>
      <h1>Context value : {contextValue}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}


function App() {
  return (
    <MyContext.Provider value={'Context Value'}>
      <FunctonalComponent />
    </MyContext.Provider>
  );
}

export default App;
