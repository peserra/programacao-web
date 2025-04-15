import { Link, Route, Routes } from 'react-router';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Profile from './Profile';
import "../styles/App.css"

export default function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <h1 className='nav-title'>Diet Plan</h1>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        © 2025 Diet Plan. All rights reserved.
      </footer>
    </div>
  );
}

