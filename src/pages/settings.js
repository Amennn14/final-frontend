import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [location, setLocation] = useState('US');
  const [userId, setUserId] = useState('12345'); // Example userId

  useEffect(() => {
    // Fetch user settings when component mounts
    const fetchSettings = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/settings/${userId}`);
        const settings = response.data;
        setIsDarkMode(settings.darkMode);
        setLanguage(settings.language);
        setLocation(settings.location);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, [userId]);

  const handleSaveSettings = async () => {
    try {
      await axios.post('http://localhost:5001/settings', {
        userId,
        darkMode: isDarkMode,
        language,
        location,
      });
      alert('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  return (
    <div className="settings-container" style={{ padding: '20px' }}>
      <h1>Settings</h1>
      <div>
        <label>Dark Mode</label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
      <div>
        <label>Language</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
      <div>
        <label>Location</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="IN">India</option>
          <option value="CA">Canada</option>
        </select>
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
