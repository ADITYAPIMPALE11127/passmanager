import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      label="Search by Profile Name"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: '20px',width:220,marginTop:30,transform:'translateX(100px)' }}
    />
  );
};

export default SearchBox;
