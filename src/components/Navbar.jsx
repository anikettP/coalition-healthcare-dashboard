import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://raw.githubusercontent.com/coalition-technologies/fed-skillstest-v2/main/TestLogo.svg" alt="Tech.Care Logo" style={{height: '40px'}} />
      </div>
      
      <div className="nav-links">
        <a href="#" className="nav-link">Overview</a>
        <a href="#" className="nav-link active">Patients</a>
        <a href="#" className="nav-link">Schedule</a>
        <a href="#" className="nav-link">Message</a>
        <a href="#" className="nav-link">Transactions</a>
      </div>
      
      <div className="user-profile">
        <img src="https://fedskillstest.coalitiontechnologies.workers.dev/images/dr-simmons.png" alt="Dr. Jose Simmons" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Jose+Simmons'; }} />
        <div className="user-info">
          <span className="name">Dr. Jose Simmons</span>
          <span className="role">General Practitioner</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
