import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import {Home} from "./components/sections/Home";
import {Projects} from "./components/sections/Projects";
import {Contact} from "./components/sections/Contact";
import {About} from "./components/sections/About"



function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
          className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Projects />
        <About />
        <Contact /> 
      </div>
    </>
  );
}

export default App;
