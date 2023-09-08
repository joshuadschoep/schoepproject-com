import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Skills, Projects } from "pages";
import { Footer, Header } from "components";

function App() {
  return (
    <div className="root">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/skills" Component={componentWithHeader(Skills)} />
          <Route path="/projects" Component={componentWithHeader(Projects)} />
        </Routes>
      </Router>
    </div>
  );
}

const componentWithHeader = (Component: () => JSX.Element) => {
  return () => (
    <main>
      <Header />
      <Component />
      <Footer />
    </main>
  );
};

export default App;
