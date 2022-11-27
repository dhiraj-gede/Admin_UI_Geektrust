import React from 'react'
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { GridCellModes } from '@mui/x-data-grid';
import SearchBar from './SearchBar';
import EditButtons from './EditButtons';
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
      />
      {/* <EditButtons {...props} /> */}

    </Box>
  );
}
