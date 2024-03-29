// import styles from './App.module.css'
import { useSelector } from "react-redux"
import { General } from "./General/General"
import { Header } from "./Header"
import { Message } from "./Message"
import { RootState } from "./states/store"
import { useEffect } from "react"

function App() {
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)
  useEffect(() => {
    !darkmode ? document.body.classList.add('body_dark') : document.body.classList.remove('body_dark')
  },[darkmode])
  
  return (
    <>
      <Header />
      <General/>
      <Message />
    </>
  )
}

export default App
