// import styles from './App.module.css'
import { General } from "./General/General"
import { Message } from "./Message"

function App() {
  document.body.classList.add('body_dark')
  return (
    <>
      <General/>
      <Message />
    </>
  )
}

export default App
