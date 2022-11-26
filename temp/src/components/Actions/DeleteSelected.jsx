import Button from "@mui/material/Button";
import CustomPagination from "../Actions/CustomPagination";

function DeleteSelectedRows(setTableRows, selectionModel) {
  setTableRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
}

export default function DeleteSelected(props) {
  return (
    <>
      <div
        className="delete-btn"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Button
          className="deletebtn"
          onClick={() =>
            DeleteSelectedRows(props.setTableRows, props.selectionModel)
          }
        >
          delete
        </Button>
        <div className="pagination" style={{ display: "flex" }}>
          <CustomPagination />
        </div>
      </div>
    </>
  );
}
