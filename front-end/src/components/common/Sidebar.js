import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => { 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav flex-column justify-content-start">
          <li className="nav-item">
            <Link to="/departments" className="nav-link">
              Departments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/employees" className="nav-link">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/salaries" className="nav-link">
              Salaries
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
