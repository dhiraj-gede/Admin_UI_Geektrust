import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import CustomPagination from "../Actions/CustomPagination";

function DeleteSelectedRows(setTableRows, selectionModel) {
  console.log('shd')
  setTableRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
}

export default function DeleteSelected(props) {
  return (
    <>
      <Box
        className="footer"
        style={{ display: "flex",alignItems:'center' ,justifyContent: "space-evenly", flexWrap:'wrap', padding:'1rem' }}
      >
        <Box 
          className="delete-btn"
          style={{
            display:'flex', 
           
          }}
          >
          <Button
          variant='contained'
          style={{background:'red', borderRadius:'2rem'}}
          onClick={() =>
            DeleteSelectedRows(props.setTableRows, props.selectionModel)
          }
        >
          delete selected
        </Button>
        </Box>
        
        <div className="pagination" style={{ display: "flex",alignItems:'center' ,justifyContent: "space-evenly", flexWrap:'nowrap' }}>
          <CustomPagination />
        </div>
      </Box>
    </>
  );
}
