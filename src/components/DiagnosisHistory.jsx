import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisHistory = ({ diagnosisHistory }) => {
  // Take last 6 months of data, reverse to show chronological order
  const chartDataRaw = [...diagnosisHistory].slice(0, 6).reverse();

  const labels = chartDataRaw.map(item => `${item.month.substring(0, 3)}, ${item.year}`);
  
  const systolicData = chartDataRaw.map(item => item.blood_pressure.systolic.value);
  const diastolicData = chartDataRaw.map(item => item.blood_pressure.diastolic.value);

  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // We'll build a custom legend
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
      }
    }
  };

  const latestData = diagnosisHistory[0]; // Most recent

  return (
    <div className="card">
      <h2 className="card-title">Diagnosis History</h2>
      
      <div className="chart-container">
        <div className="chart-wrapper">
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
             <h3 style={{fontSize: '18px', fontWeight: '700'}}>Blood Pressure</h3>
             <select style={{background: 'transparent', border: 'none', fontWeight: '400'}}>
               <option>Last 6 months</option>
             </select>
          </div>
          <div style={{height: '250px'}}>
            <Line data={data} options={options} />
          </div>
        </div>
        
        <div className="chart-legend">
          <div className="legend-item">
            <p className="label"><span className="dot" style={{backgroundColor: '#E66FD2'}}></span> Systolic</p>
            <p className="value">{latestData.blood_pressure.systolic.value}</p>
            <p className="status">{latestData.blood_pressure.systolic.levels}</p>
          </div>
          <hr style={{borderColor: '#CBC8D4', borderStyle: 'solid', borderWidth: '0.5px'}} />
          <div className="legend-item">
            <p className="label"><span className="dot" style={{backgroundColor: '#8C6FE6'}}></span> Diastolic</p>
            <p className="value">{latestData.blood_pressure.diastolic.value}</p>
            <p className="status">{latestData.blood_pressure.diastolic.levels}</p>
          </div>
        </div>
      </div>

      <div className="vitals-grid">
        <div className="vital-card respiratory">
          <img src="https://raw.githubusercontent.com/coalition-technologies/fed-skillstest-v2/main/respiratory%20rate.svg" alt="Respiratory Rate" />
          <p className="label">Respiratory Rate</p>
          <p className="value">{latestData.respiratory_rate.value} bpm</p>
          <p className="status">{latestData.respiratory_rate.levels}</p>
        </div>
        
        <div className="vital-card temperature">
          <img src="https://raw.githubusercontent.com/coalition-technologies/fed-skillstest-v2/main/temperature.svg" alt="Temperature" />
          <p className="label">Temperature</p>
          <p className="value">{latestData.temperature.value}°F</p>
          <p className="status">{latestData.temperature.levels}</p>
        </div>
        
        <div className="vital-card heart">
          <img src="https://raw.githubusercontent.com/coalition-technologies/fed-skillstest-v2/main/HeartBPM.svg" alt="Heart Rate" />
          <p className="label">Heart Rate</p>
          <p className="value">{latestData.heart_rate.value} bpm</p>
          <p className="status">{latestData.heart_rate.levels}</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
