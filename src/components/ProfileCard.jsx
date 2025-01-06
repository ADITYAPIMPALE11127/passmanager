import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import './ProfileCard.css'; 

const ProfileCard = ({ profiles, onDelete }) => {
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="card-container">
      {profiles.map((profile) => (
        <Card key={profile.id} className="profile-card">
          <CardContent className="card-content">
            <Typography style={{ textAlign: 'left' }} variant="h5" component="div" className="card-title">
              Profile Name: {profile.profileName}
            </Typography>
            <Typography style={{ textAlign: 'left', marginTop: 14 }} variant="h6" color="text.secondary" className="card-body">
              Password: {visiblePasswords[profile.id] ? profile.password : '••••••••'}
            </Typography>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  marginRight: '10px',
                }}
                onClick={() => togglePasswordVisibility(profile.id)}
              >
                {visiblePasswords[profile.id] ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => copyToClipboard(profile.password)}
              >
                <FileCopyIcon />
              </button>
              <button
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                }}
                onClick={() => onDelete(profile.id)} 
              >
                <DeleteIcon /> 
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProfileCard;
