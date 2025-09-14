import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import './App.css'

const Description = styled.p`
  color: #888;
  font-size: 20px;
  font-weight:bold;
`
function Logo(props) {
  const style = {
    color: props.color
  }
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo title="변경을 확인해봅시다" color="yellow"/>
      <Logo title="잘 보이나요?" color="tomato"/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Description>Click on the Vite and React logos to learn more</Description>
    </>
  )
}

export default App
