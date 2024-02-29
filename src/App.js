import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import SobreMi from "./components/About";
import Portfolio from "./components/Portfolio";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SobreMi />
      <Portfolio />
      <Habilidades />
      <Contacto />
      <SocialLinks />
    </div>
  );
}

export default App;
