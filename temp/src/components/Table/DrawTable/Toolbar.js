import React from 'react'
import { Box } from '@mui/system';
import SearchBar from '../Actions/SearchBar';
export default function Toolbar(props) {
  return (
    <Box
    className='toolbar'
    style={{ display: 'flex', justifyContent: 'center' }}

    sx={{
      borderBottom: 1,
      borderColor: "divider",
      p: 1,
    }}
    > 
      <SearchBar
        setTableRows={props.setTableRows}
        fetchedRows={props.fetchedRows}
        searchResults={props.searchResults}
        setSearchResults={props.setSearchResults}
        tableRows={props.tableRows}
      />

    </Box>
  );
}
