import React from 'react';

const DiagnosticList = ({ diagnosticList }) => {
  return (
    <div className="card" style={{ flex: 1 }}>
      <h2 className="card-title">Diagnostic List</h2>
      
      <div style={{ overflowX: 'auto' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList.map((item, index) => (
              <tr key={index}>
                <td style={{ width: '30%' }}>{item.name}</td>
                <td style={{ width: '50%' }}>{item.description}</td>
                <td style={{ width: '20%' }}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
