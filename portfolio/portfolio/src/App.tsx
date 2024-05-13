import "./app.scss";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>works</section>
      <section>animation</section>
      <section>skills</section>
      <section>contact</section>
    </div>
  );
};

export default App;
