import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
