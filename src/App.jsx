import { useState } from 'react'
import './App.css'
import Dog from './components/Dog';
import FetchDog from './components/FetchDog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Dog /> */}
      <FetchDog />
    </>
  )
}

export default App
