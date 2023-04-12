import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RootState } from './store'
import { increment } from './store/slices/counter'

function App() {

  // el hook useSelector de react-redux permite leer datos del store
  const { counter } = useSelector((state: RootState) => state.counter);
  // el hook useDispatch de react-redux permite permite acceder a la acciones del store para
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Mediante el dispatch se hace el llamada a la función incrementar */}
        <button onClick={() => { dispatch(increment()) }}>
          count is {counter}
        </button>
      </div>
    </div>
  )
}

export default App
