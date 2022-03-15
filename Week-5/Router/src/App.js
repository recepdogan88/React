import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div>
            <ul className="header">
              <li><Link className='Link'  to="/Home">Home</Link> </li>
              <li><Link className='Link' to="/About">About</Link></li>
              <li><Link className='Link' to="/Contact">Contact</Link></li>
            </ul>
          <div className="content">
            <Routes>
              <Route path="/Home" element={<Home/>} />  
              <Route path="/About" element={<About/>} />
              <Route path="/Contact" element={<Contact/>}>
              </Route>
            </Routes>
          </div>
          </div>
    </BrowserRouter>
  )
}

export default App;
