import React, { useState } from 'react'
import './App.css'
import Home from './Home'
import Toggle from './Toggle'
import InputExample from './InputExample'
import ShowHide from './ShowHide'
import MultiForm from './MultiForm'
import Counter from './Counter'

const Module = ({ index, title, children }) => (
  <div className="panel module">
    <div className="module-head">
      <span className="module-index">{index}</span>
      <span className="module-title">{title}</span>
    </div>
    <div className="module-body">{children}</div>
  </div>
)

const App = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="lab">

      <header className="lab-header">
        <span className="eyebrow">React · Day 02</span>
        <h1>Hooks Workbench</h1>
        <p className="lab-sub">
          Six small instruments, one shared room — every control below
          manages its own slice of state.
        </p>
      </header>

      <section className="panel hero-panel">
        <div className="panel-label">Main Counter</div>
        <div className="counter-display">{count}</div>
        <div className="controls-row">
          <button onClick={handleDecrement}>− Decrement</button>
          <button className="ghost-btn" onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>+ Increment</button>
        </div>
      </section>

      <div className="module-grid">
        <Module index="01" title="Home">
          <Home />
        </Module>
        <Module index="02" title="Counter">
          <Counter />
        </Module>
        <Module index="03" title="Toggle Switch">
          <Toggle />
        </Module>
        <Module index="04" title="Live Input">
          <InputExample />
        </Module>
        <Module index="05" title="Show / Hide">
          <ShowHide />
        </Module>
        <Module index="06" title="Multi Field Form">
          <MultiForm />
        </Module>
      </div>

    </div>
  )
}

export default App
