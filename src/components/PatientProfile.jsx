import React from 'react';

const PatientProfile = ({ patient }) => {
  return (
    <div className="card">
      <div className="profile-header">
        <img src={patient.profile_picture} alt={patient.name} />
        <h1>{patient.name}</h1>
      </div>
      
      <div className="info-item">
        <div className="icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
        <div className="info-text">
          <p className="label">Date of Birth</p>
          <p className="value">{patient.date_of_birth}</p>
        </div>
      </div>
      
      <div className="info-item">
        <div className="icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div className="info-text">
          <p className="label">Gender</p>
          <p className="value">{patient.gender}</p>
        </div>
      </div>
      
      <div className="info-item">
        <div className="icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div className="info-text">
          <p className="label">Contact Info.</p>
          <p className="value">{patient.phone_number}</p>
        </div>
      </div>
      
      <div className="info-item">
        <div className="icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div className="info-text">
          <p className="label">Emergency Contacts</p>
          <p className="value">{patient.emergency_contact}</p>
        </div>
      </div>
      
      <div className="info-item">
        <div className="icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        <div className="info-text">
          <p className="label">Insurance Provider</p>
          <p className="value">{patient.insurance_type}</p>
        </div>
      </div>
      
      <button className="show-all-btn">Show All Information</button>
    </div>
  );
};

export default PatientProfile;
