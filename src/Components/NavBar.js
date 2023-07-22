import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const openmenu = () => {
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);

    if (rs.getPropertyValue('--display') === 'none')
      r.style.setProperty('--display', 'flex');
    else r.style.setProperty('--display', 'none');
  };
  return (
    <header id="header">
      <div className="wrap-header--padding-sm">
        <nav className="main-navigation">
          <div className="title">
            <a href="/">
              <span className="h6">Cyra Moss</span>
            </a>
            <span className="h6">Software Developer</span>
          </div>
          <div id="main-menu">
            <ul>
              <li className="h6">
                <Link to="/work">Work</Link>
              </li>
              <li className="h6">
                <Link to="/about">About</Link>
              </li>
              <li className="h6">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="togglemenu">
            <nav>
              <button onClick={openmenu} className="menu_button">
                Menu
              </button>

              <ul className="menu menu-background  col">
                <li className=" ow">
                  <a href="/">
                    <span className="h6">Home</span>
                  </a>
                </li>
                <li className=" rw">
                  <Link to="/work">Work</Link>
                </li>
                <li className="mow">
                  <Link to="/about">About</Link>
                </li>
                <li className=" ow">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
}
