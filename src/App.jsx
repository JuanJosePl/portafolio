import styles from './App.module.css'
import { About } from './componentes/About/About'
import { Experience } from './componentes/Experience/Experience'
import { Hero } from './componentes/hero/Hero'
import { Navbar } from './componentes/navbar/Navbar'
import {Projects} from './componentes/Projects/Projects'
import {Contact} from './componentes/Contact/Contact'
function App() {

  return (
    <>
      <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>


    </>
  )
}

export default App
