import React, { useState, useEffect } from 'react';
import { fetchPatientData } from './services/api';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PatientProfile from './components/PatientProfile';
import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults';

function App() {
  const [data, setData] = useState({ allPatients: [], jessica: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchPatientData();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch patient data.');
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="loader-container">Loading Dashboard...</div>;
  }

  if (error) {
    return <div className="loader-container" style={{ color: 'red' }}>{error}</div>;
  }

  const { allPatients, jessica } = data;

  return (
    <div className="dashboard-container">
      <Navbar />
      
      <div className="main-content">
        <Sidebar patients={allPatients} />
        
        <div className="center-content">
          {jessica.diagnosis_history && (
            <DiagnosisHistory diagnosisHistory={jessica.diagnosis_history} />
          )}
          
          {jessica.diagnostic_list && (
            <DiagnosticList diagnosticList={jessica.diagnostic_list} />
          )}
        </div>
        
        <div className="right-sidebar">
          <PatientProfile patient={jessica} />
          
          {jessica.lab_results && (
            <LabResults labResults={jessica.lab_results} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
