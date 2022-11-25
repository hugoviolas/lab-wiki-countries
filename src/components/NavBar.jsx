import React from 'react';

const NavBar = () => {
  return (
    <div>
      <h1>LAB - WikiCountries.</h1>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
