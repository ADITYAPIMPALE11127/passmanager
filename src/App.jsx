import React, { useEffect, useState } from 'react';
import PassForm from './components/PassForm'; // Assuming you have this component
import ProfileCard from './components/ProfileCard';
import SearchBox from './components/SearchBox'; // Import the SearchBox component
import './App.css'; // Optional CSS for styling

const Main = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load existing profiles from local storage on component mount
    const existingProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(existingProfiles);
  }, []);

  const handleProfileSave = (updatedProfiles) => {
    setProfiles(updatedProfiles);
  };

  const handleDeleteProfile = (id) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  // Filter profiles based on the search term
  const filteredProfiles = profiles.filter(profile =>
    profile.profileName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <PassForm onProfileSave={handleProfileSave} />
      <SearchBox  style={{marginTop:30}} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProfileCard profiles={filteredProfiles} onDelete={handleDeleteProfile} />
    </div>
  );
};

export default Main;
