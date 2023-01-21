import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ContactCard from './Components/ContactCard';
import AboutScreen from './Screens/AboutScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="app">
          <div className="homeinfo">
            <h1>Hi, I'm Cyra</h1>

            <h2>Software Developer from Auckland, New Zealand</h2>
            <Link to={`/`}>
              <div>aboutscreen</div>
            </Link>
            <a href="About.js">A About screen</a>
          </div>
          <div className="picbox">
            <img className="homepic" src="./images/me.png" alt="mee"></img>
          </div>
        </div>
        <ContactCard />
      </div>

      <Routes>
        <Route path="/" exact element={<AboutScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
