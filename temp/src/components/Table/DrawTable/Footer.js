// Footer Contains Delete selected Button and Pagination


/**
 * Returns x raised to the n-th power.
 *
 * @param DeleteSelected Deletes Selected Row
 * @param CustomPaginationThe Displays pagination in Footer
 *
 */
import React from 'react'
import DeleteSelected from '../Actions/DeleteSelected'
import CustomPagination from '../Actions/CustomPagination'
import { Box } from '@mui/material'
function Footer(props) {
  return (
    <Box
      className="footer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: "1rem",
      }}
    >

      <DeleteSelected {...props} />
      <div
        className="pagination"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "nowrap",
        }}
      >
        <CustomPagination />
      </div>
    </Box>


  )
}

export default Footer
