import React from 'react'
import { Box } from '@mui/system';
import SearchBar from './SearchBar';
import EditButtons from './EditButtons';
export default function Toolbar(props) {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        p: 1,

      }}
      style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap' }}
    >
      <SearchBar
        setTableRows={props.setTableRows}
        fetchedRows={props.fetchedRows}
        searchResults={props.searchResults}
        setSearchResults={props.setSearchResults}
      />
      <EditButtons {...props} />

    </Box>
  );
}
