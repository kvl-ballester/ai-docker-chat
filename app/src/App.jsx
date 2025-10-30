import { useState } from 'react'

function App() {
  

  const model = import.meta.env.VITE_LLM_MODEL;
  const baseUrl = import.meta.env.VITE_LLM_BASE_URL;

  return (
    <div className="App">
      <h1>Chat with {model}</h1>

    </div>
  )
}

export default App
