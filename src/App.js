import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import SobreMi from "./components/About";
import Portfolio from "./components/Portfolio";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import Experiencia from "./components/Experiencia";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SobreMi />
      <Portfolio />
      <Habilidades />
      <Experiencia />
      <Contacto />
      <SocialLinks />
    </div>
  );
}

export default App;
