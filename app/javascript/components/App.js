import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Greeting from './Greeting'

function App  () {
  return (
    <>
    <h1>Welcome Rails with React</h1>
    <ul className="link-list">
      <Link to="/greetings" className="logo-title">
        Greetings
      </Link>
    </ul>

    <Routes>
      <Route path="/greetings" element={<Greeting />} />
    </Routes>
  </>
  )
}

export default App;