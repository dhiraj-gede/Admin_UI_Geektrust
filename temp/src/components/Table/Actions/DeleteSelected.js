import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import CustomPagination from "./CustomPagination";
import { useSnackbar } from "notistack";

export default function DeleteSelected(props) {
  const { enqueueSnackbar } = useSnackbar();
  function DeleteSelectedRows(setFetchedRows, selectionModel) {
    console.log(props)
    setFetchedRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
    enqueueSnackbar(`Selected rows Deleted`, { variant: "error" });
  }
  return (
    <>
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
    </>
  );
}
