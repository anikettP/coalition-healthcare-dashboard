import React from 'react';

const Sidebar = ({ patients }) => {
  return (
    <div className="left-sidebar">
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800' }}>Patients</h2>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#072635"/>
        </svg>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {patients.map((patient, index) => {
          const isActive = patient.name === 'Jessica Taylor';
          return (
            <div key={index} className={`list-item ${isActive ? 'active' : ''}`}>
              <img src={patient.profile_picture} alt={patient.name} />
              <div className="list-item-info">
                <p className="name">{patient.name}</p>
                <p className="details">{patient.gender}, {patient.age}</p>
              </div>
              <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#072635"/>
                <circle cx="9" cy="2" r="2" fill="#072635"/>
                <circle cx="16" cy="2" r="2" fill="#072635"/>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
