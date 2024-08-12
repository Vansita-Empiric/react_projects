import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  const username = "vansita"
  // const [value1, setValue1] = useState('dc')
  return <h3>Hello {value1}</h3>;
}

const reactElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Vini"

const anotherElement = React.createElement(
  'a',
  { href: "https://google.com", target: '_blank' },
  'click to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // anotherElement
  // reactElement
  <App />
  //  MyApp()

    

)
