import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallex/Parallex";

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
        <Parallax type="portfolio" />{" "}
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
