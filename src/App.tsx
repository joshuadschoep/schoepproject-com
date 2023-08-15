import "./App.scss";
import { Hero, Skills, Timeline } from "./splashes";
import { Footer } from "./splashes/footer/footer";
import { Education } from "./splashes/education/education";

function App() {
  return (
    <div className="root">
      <Hero />
      <Timeline />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
