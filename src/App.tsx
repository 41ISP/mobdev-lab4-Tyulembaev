

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import FavouriteCatsPage from './pages/FavouriteCatsPage/FavouriteCatsPage';
import MainPage from './pages/main/MainPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourite" element={<FavouriteCatsPage />} />
      </Routes>
    </Router>
  );
}

export default App
