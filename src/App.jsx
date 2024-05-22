import { NavBar } from "./components/navBar";
import Hero from "./components/hero";
import About from "./components/about";
import Support from "./components/support";
// import Events from "./components/events";
import Gallery from "./components/gallery";
import Honour from "./components/honour";
import Footer from "./components/footer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Support />
      {/* <Events /> */}
      <Gallery />
      <Honour />
      <Footer />
    </>
  );
}

export default App;
