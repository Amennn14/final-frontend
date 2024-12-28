import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MorePage from './pages/MorePage';
import Rent from './pages/Rent';
import OfferDetailPage from './pages/OfferDetailPage';
import BuyPage from './pages/Buy';
import SettingsPage from './pages/settings';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/offer/:id" element={<OfferDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/Buy" element={<BuyPage />} />
        <Route path="/more" element={<MorePage />} />      </Routes>
    </Router>
  );
}

export default App;
