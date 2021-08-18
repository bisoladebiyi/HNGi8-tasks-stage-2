import './App.css';
import Navbar from './components/navbar';
import Heading from './components/heading';
import Experiences from './components/experiences';
import Skills from './components/skills';
import Education from './components/education';
import Footer from './components/footer';
import MobileMenu from './components/mobile-menu';

function App() {
  const showMenu = () => {
    let menu = document.querySelector(".mobile-menu")
    
    if (menu.style.right !== "0px") {
      menu.setAttribute("style", "right: 0;");
    }
     else {
      menu.setAttribute("style", "right: -1000px;");
    }
};

  return (
    <div className="App">
      <Navbar show={showMenu} /><br />
      <Heading />
      <Experiences />
      <Skills/>
      <Education />
      <Footer/>
      <MobileMenu show={showMenu}  />
    </div>
  );
}

export default App;
