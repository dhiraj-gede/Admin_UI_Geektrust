import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import CustomPagination from "../Actions/CustomPagination";
import { useSnackbar } from "notistack";

export default function DeleteSelected(props) {
  const { enqueueSnackbar } = useSnackbar();
  function DeleteSelectedRows(setTableRows, selectionModel) {
    setTableRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
    enqueueSnackbar(`Selected rows Deleted`, { variant: "error" });
  }
  return (
    <>
      
        <Box
          className="delete-btn"
          style={{
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            style={{ background: "red", borderRadius: "2rem" }}
            onClick={() =>
              DeleteSelectedRows(props.setFetchedRows, props.selectionModel)
            }
          >
            delete selected
          </Button>
        </Box>

        
     
    </>
  );
}
