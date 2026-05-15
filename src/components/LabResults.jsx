import React from 'react';

const LabResults = ({ labResults }) => {
  return (
    <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h2 className="card-title">Lab Results</h2>
      
      <div style={{ overflowY: 'auto', flex: 1 }}>
        {labResults.map((result, index) => (
          <div key={index} className="lab-result-item">
            <span style={{ fontSize: '13px' }}>{result}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
               <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
               <polyline points="7 10 12 15 17 10"></polyline>
               <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
