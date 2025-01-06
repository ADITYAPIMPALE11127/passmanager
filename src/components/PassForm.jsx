import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './PassForm.css'; 

const PassForm = ({ onProfileSave }) => {
  const [profileName, setProfileName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      id: Date.now(), 
      profileName,
      password,
    };
  
    const existingProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    existingProfiles.push(profileData);
    localStorage.setItem('profiles', JSON.stringify(existingProfiles));
    

    onProfileSave(existingProfiles);
    

    setProfileName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add New Password</h2>
      <TextField
      style={{marginBottom:20}}
        id="profile-name"
        label="Profile Name"
        variant="outlined"
        className="text-field"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
        required
      />
      <TextField
        id="password"
        label="Password"
        type="text"
        style={{marginBottom:20}}
        variant="outlined"
        className="text-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button variant="outlined" className="submit-button" type="submit">Add Password +</Button>
    </form>
  );
};

export default PassForm;
