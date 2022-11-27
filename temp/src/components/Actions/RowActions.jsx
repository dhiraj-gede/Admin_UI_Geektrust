import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Checkbox, Fab } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
// import EditToolbar from "./Toolbar";

function RowActions(props) {
  const [rowEditMode, setRowEditMode] = useState("view");

  const handleDeleteRow = (e) => {
    const api = props.params.api;
    props.setDeleteRow(api.getRow(props.params.id));
    console.log("props");
  };
  const apiref=props.api;

  const handleEditRow = () => {
    // setRowEditMode(apiref.getRowMode(apiref.getRow(props.params.id).id))
    setRowEditMode(apiref.getRowMode(apiref.getRow(props.params.id).id)==='view'? 'edit': 'view')
    rowEditMode==='view'?
    apiref.startRowEditMode({id: apiref.getRow(props.params.id).id}):apiref.stopRowEditMode({id: apiref.getRow(props.params.id).id});

  };
  useEffect(()=>{
    console.log(rowEditMode)
  }, [rowEditMode])
  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
        width: "100%",
      }}
    >
      <Button
        varient="outlined"
        sx={
          rowEditMode==='view'?{
          width: 40,
          height: 40,
          color: blue[500],

          "&:hover": { color: blue[700], bgcolor: blue[100] },
        }:{width: 40,
          height: 40,
          color: green[500],

          "&:hover": { color: green[700], bgcolor: green[100] }}}
        onClick={handleEditRow}
      >
        {rowEditMode==='view'?<EditOutlinedIcon />:<SaveIcon/>}
      </Button>
      <Button
        varient="outlined"
        sx={{
          width: 40,
          height: 40,
          color: red[500],

          "&:hover": { color: red[700], bgcolor: red[100] },
        }}
        onClick={handleDeleteRow}
      >
        <DeleteForeverOutlinedIcon />
      </Button>
    </Box>
  );
}

export default RowActions;
