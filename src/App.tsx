
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import CarDashboard from './component/CarDashboard';
import CarDetails from './component/CarDetails';

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Welcome to The Coolest Car Inventory Dashboard</h1>
        <Header />
        <Routes>
          <Route path="/" element={<CarDashboard />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







