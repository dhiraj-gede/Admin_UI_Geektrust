import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveIcon from '@mui/icons-material/Save';
import { Box, Checkbox, Fab } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import { display } from "@mui/system";
// import EditToolbar from "./Toolbar";

function RowActions(props) {
  
  const handleDeleteRow = (e) => {
    const api = props.params.api;
    props.setDeleteRow(api.getRow(props.params.id)); 

  };
  

  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
        width: '100%'
      }}
    >
{/* <EditToolbar selectedCellParams cellMode cellModesModel setCellModesModel/> */}
          <Button
            varient="outlined"

            sx={{
              width: 40,
              height: 40,
              color: red[500],
              
              "&:hover": { color: red[700],bgcolor:red[100], },              
            }}
            onClick={handleDeleteRow}
          >
            <DeleteForeverOutlinedIcon />
          </Button>
     
    </Box>
  );
}

export default RowActions;
