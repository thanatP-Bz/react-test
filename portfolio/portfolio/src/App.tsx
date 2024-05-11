import "./app.scss";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        {/* hero */}
      </section>
      <section>about me</section>
      <section>works</section>
      <section>animation</section>
      <section>skills</section>
      <section>contact</section>
    </div>
  );
};

export default App;
