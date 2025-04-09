import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Service from './Component/Services/Service'
import Mywork from './Component/Mywork/Mywork'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App
