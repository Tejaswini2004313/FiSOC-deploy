
import './App.css'
import About from './components/About'
import Events from './components/Events'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import ContactUs from './components/ContactUs'
import Blog from './components/Blog'
import MyFooter from './components/MyFooter'

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <Events/>
      <Blog/>
      <Newsletter/>
      <About/>
      <ContactUs/>
      <MyFooter/>
    </>
  )
}

export default App
