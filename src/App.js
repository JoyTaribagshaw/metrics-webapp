import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './pages/Home';
import { getCompanies } from './redux/Companies/companiesSlice';
import MetricsPage from './pages/metrics';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define a route for the details page */}
        <Route path="/metrics/:symbol" element={<MetricsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
