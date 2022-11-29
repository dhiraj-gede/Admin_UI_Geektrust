// Footer Contains Delete selected Button and Pagination

import React from 'react'
import DeleteSelected from '../Actions/DeleteSelected'
import CustomPagination from '../Actions/CustomPagination'
import { Box } from '@mui/material'



/**
 * 
 * @component Footer
 * @returns delete selected button and pagination
 * @example
 * return(
 * <DeleteSelected />
 * <CustomPagination />
 * )
 */
const Footer=(props)=> {
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
