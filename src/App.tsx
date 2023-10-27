import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, Skills, Projects, NotFound, Contact } from 'pages';
import { Footer, Header } from 'components';
import { Scroller } from 'components/scroller';

function App() {
  return (
    <div className="root">
      <Router>
        <Scroller>
          <Routes>
            <Route path="*" Component={NotFound} />
            <Route path="/" Component={Home} />
            <Route path="/skills" Component={componentWithHeader(Skills)} />
            <Route path="/projects" Component={componentWithHeader(Projects)} />
            <Route path="/contact" Component={componentWithHeader(Contact)} />
          </Routes>
        </Scroller>
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
