// import styles from './App.module.css'
import { useSelector } from "react-redux"
import { General } from "./General/General"
import { Header } from "./Header"
import { Message } from "./Message"
import { RootState } from "./states/store"
import { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Statistic } from "./Statistic"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
              <Header page={false}/>
              <General />
              <Message />
            </>
  },
  {
    path: "statistic",
    element: <>
              <Header page={true} />
              <Statistic />
            </>
  }

])

function App() {
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)
  useEffect(() => {
    !darkmode ? document.body.classList.add('body_dark') : document.body.classList.remove('body_dark')
  },[darkmode])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
