import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import HeaderTr from './Components/Header/HeaderTr'
import Home from './Components/Home/Home'
import Services from './Components/ServicesTr/Services'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {
  return (
    <div className='container'>
      <HeaderTr />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
