import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Navbar.css';
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <nav>
      <div className='titleName'><a href='/' style={{textDecoration:'none',color:'white'}}>MovieDb</a>  </div>
      <div className={`navRight ${showMenu ? 'showMenu' : ''}`}>
        <div className='menuButton' onClick={() => setShowMenu(!showMenu)}>
          <BiMenu />
        </div>
        <ul>
          <li><Link to="/" onClick={() => setShowMenu(false)}>Popular</Link></li>
          <li><Link to="/top-rated" onClick={() => setShowMenu(false)}>Top Rated</Link></li>
          <li><Link to="/upcoming" onClick={() => setShowMenu(false)}>Upcoming</Link></li>
        </ul>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movie..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
