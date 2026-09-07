import Header from './components/Header'
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Projects from './components/Projects'
import Services from './components/Services';
import Process from './components/Process'
import  Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/variables.css';
import './styles/global.css';



function App() {
  

  return (
    <>
      <Header />
      <main>
        <Hero /> 
        <Metrics />
        <Projects />
        <Services />
        <Process />
        <Contact />
        <Footer />
      </main>
      {/* <Footer /> */}
      
    </>
  )
}

export default App
