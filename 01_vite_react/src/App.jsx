import { useState } from "react"

function App() {
  
  const [txt, setTxt] = useState('')
  const [msg, setMsg] = useState('')

  const changeTxt = (e) => {
    setTxt(e.target.value)
  }

  const changeMsg = () => {
    setMsg(txt)
    setTxt('')
  }


  return (
    <>
    <input type="text" onChange={changeTxt} value={txt} onFocus={() => setMsg('')}/> 
    <button onClick={changeMsg}>Click me</button>
    <h1>hello {msg}</h1>
    </>
  )
}

export default App



/*

const [txt, setTxt] = useState('')
  const [msg, setMsg] = useState('')

  function changetxt(e) {
    setTxt(e.target.value)
  }

  function show() {
    // e.preventDefault()
    setMsg(txt)
    setTxt('')
  }

  <input type="text" id="f1" onChange={changetxt} value={txt} onFocus={() => {
      setMsg('')
    }} />
    <button onClick={show}>Click me</button>
    <h2>Hello {msg}</h2>

    */