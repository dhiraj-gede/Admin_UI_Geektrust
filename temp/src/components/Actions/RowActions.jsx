import React from "react";
import Button from "@mui/material/Button";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
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
        width: "100%",
      }}
    >
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
