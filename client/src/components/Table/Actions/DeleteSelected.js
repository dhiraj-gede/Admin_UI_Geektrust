import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types"

/**
 * Component for Deleting Selected Rows from Table
 *
 * @component DeleteSelected
 * @example
 * return (
 * <Button>
 * delete selected
 * </Button>
 *  )
 */

const DeleteSelected = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  function DeleteSelectedRows(setTableRows, selectionModel, setSelectionModel) {
    if (selectionModel.length === 0) { enqueueSnackbar(`Select atleast one Row`, { variant: "warning" }) }
    else {
      setTableRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)))
      enqueueSnackbar(`Selected rows Deleted`, { variant: "error" });
      setSelectionModel([])
    }
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
            DeleteSelectedRows(props.setFetchedRows, props.selectionModel, props.setSelectionModel)
          }
        >
          delete selected
        </Button>
      </Box>



    </>
  );
}
DeleteSelected.propTypes = {
  /**
   * Updates frtched rows by removing selected rows
   */
  setFetchedRows: PropTypes.func,
  /**
    * List of Selected Rows
    */
  selectionModel: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default DeleteSelected