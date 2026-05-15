import axios from 'axios';

const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const username = 'coalition';
const password = 'skills-test';

export const fetchPatientData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`
      }
    });
    
    // We only need Jessica Taylor's data
    const patients = response.data;
    const jessica = patients.find(p => p.name === 'Jessica Taylor');
    
    if (!jessica) {
      throw new Error('Patient Jessica Taylor not found');
    }
    
    return { allPatients: patients, jessica };
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};
