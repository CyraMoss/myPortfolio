import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutScreen from './Screens/AboutScreen';
import HomeScreen from './Screens/HomeScreen';
import WorkScreen from './Screens/WorkScreen';
import ProjectScreen from './Screens/ProjectScreen';
import ContactScreen from './Screens/ContactScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" exact element={<HomeScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="work" element={<WorkScreen />}></Route>
        <Route path="contact" element={<ContactScreen />}></Route>
        <Route path="project" element={<ProjectScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
