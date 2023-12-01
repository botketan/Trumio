import logo from './logo.svg';
import './App.css';
import Post from './components/Post.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Post/>
        </div>
      </div>
    </Router>
  );
}

export default App;
