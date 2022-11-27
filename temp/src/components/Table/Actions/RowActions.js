import React from "react";
import Button from "@mui/material/Button";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import { useSnackbar } from 'notistack'

function RowActions(props) {
  const { enqueueSnackbar } = useSnackbar()
  
  const handleDeleteRow = (e) => {
    const api = props.params.api;
    props.setDeleteRow(api.getRow(props.params.id));
    enqueueSnackbar(
      `Row id ${props.params.id} Deleted`,
      { variant: "error" }
    );
  };
  const apiref=props.api;

  const handleEditRow = () => {
    apiref.getRowMode(apiref.getRow(props.params.id).id)==='view'?
    apiref.startRowEditMode({id: apiref.getRow(props.params.id).id}):
    apiref.stopRowEditMode({id: apiref.getRow(props.params.id).id});
    apiref.getRowMode(apiref.getRow(props.params.id).id)==='view'?
    enqueueSnackbar(
      `Editing Row id: ${props.params.id}`,
      { variant: "warning" }
    )
     :
    enqueueSnackbar(
      `Row ${props.params.id} saved`,
      { variant: "success" }
    )
    ;
  };
 
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
          apiref.getRowMode(apiref.getRow(props.params.id).id)==='view'?{
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
        {apiref.getRowMode(apiref.getRow(props.params.id).id)==='view'?<EditOutlinedIcon />:<SaveIcon/>}
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
