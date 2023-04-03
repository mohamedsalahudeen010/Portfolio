import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import IntroPage from './components/IntroPage/IntroPage';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { themeContext } from './context';
import { useContext } from 'react';

function App() {
  const theme=useContext(themeContext)
  const lightMode=theme.state.lightTheme;
  return (
  //  ./components/image/background/lightBG.jpg
    <div className="App"
    style={{backgroundImage:lightMode?"url('./components/image/29456489.jpg')":"",
    color:lightMode?"black":""}}
    >
       {/* <img src={logo} className="App-logo" alt="logo" /> */}

       <NavBar/>
       <IntroPage/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
