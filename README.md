# Coalition Technologies Healthcare Dashboard

A responsive, single-page healthcare dashboard built with React and Vite. This project integrates with the Coalition Technologies Patient Data API to dynamically render patient information, specifically focusing on the patient "Jessica Taylor".

## 🚀 Features
- **Responsive Layout**: Designed to adapt across desktop, tablet, and mobile viewing.
- **Dynamic API Integration**: Fetches real-time structured JSON data via Basic Auth.
- **Blood Pressure Chart**: Interactive visualization of 6 months of blood pressure data using `Chart.js`.
- **Clean Component Architecture**: Modular and reusable React components.

---

## 📂 File Structure

```text
src/
├── components/
│   ├── DiagnosisHistory.jsx   # Renders Chart.js graph and vital signs cards
│   ├── DiagnosticList.jsx     # Table view of all diagnosis issues
│   ├── LabResults.jsx         # Scrollable list of lab results with download icons
│   ├── Navbar.jsx             # Top navigation and doctor profile
│   ├── PatientProfile.jsx     # Right-sidebar displaying patient details
│   └── Sidebar.jsx            # Left-sidebar showing the patient list
├── services/
│   └── api.js                 # Axios API configurations and Basic Auth handling
├── styles/
│   └── index.css              # Global styling, tokens, layout, and component CSS
├── App.jsx                    # Main application layout assembling all components
└── main.jsx                   # React DOM entry point
```

---

## ⚙️ Working & Data Flow

1. **Initialization (`main.jsx` & `App.jsx`)**
   - The application starts and mounts `<App />`. 
   - `App.jsx` controls the global `loading` and `error` states.

2. **Fetching Data (`services/api.js`)**
   - A `useEffect` hook in `App.jsx` triggers the `fetchPatientData` function.
   - Axios makes an HTTP GET request to `https://fedskillstest.coalitiontechnologies.workers.dev`.
   - **Authentication**: Credentials (`coalition`:`skills-test`) are encoded using `btoa` and passed in the `Authorization: Basic` header.
   - **Filtering**: The script filters the returned JSON array to locate the object where `name === 'Jessica Taylor'`.

3. **Rendering the UI Components**
   - **`Navbar`**: Displays the static layout for the top navigation bar.
   - **`Sidebar`**: Receives the full list of patients to display on the left (highlighting Jessica Taylor).
   - **`DiagnosisHistory`**: Takes Jessica's `diagnosis_history` array, isolates the last 6 months, reverses it to chronological order, and passes the mapped `systolic` and `diastolic` datasets to `react-chartjs-2`.
   - **`DiagnosticList`**: Iterates over `diagnostic_list` to populate an HTML table.
   - **`PatientProfile` & `LabResults`**: Renders her demographic details and lab reports on the right side of the dashboard.

---

## 🛠️ Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Responsive Flexbox/Grid)
- **Data Fetching**: Axios
- **Charting**: Chart.js / react-chartjs-2

---

## 💻 How to Run Locally

1. **Install Dependencies**
   Navigate to the project directory and run:
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```