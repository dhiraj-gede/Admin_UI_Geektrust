import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import Pagination from "@mui/material/Pagination";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

/**
 * @component CustomPagination 
 * @param {number} page current page number
 * @param {number} pageCount current page number
 * @returns footer of Table
 */
const CustomPagination = ()=> {

  /**
   *@param {obj} apiRef React.MutableRefObject<GridApiCommunity>
   */
  const apiRef = useGridApiContext();
  /**
   @param {number} page current page number
   */
  const page = useGridSelector(apiRef, gridPageSelector);   
  /**
   * @param {number} pageCount current page number
   */
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <>
      <KeyboardDoubleArrowLeftIcon style={page===0?{color:'rgba(0,0,0,0.3)'}:{cursor:'pointer'}} onClick={() => apiRef.current.setPage(0)} />
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
      <KeyboardDoubleArrowRightIcon style={page===pageCount-1?{color:'rgba(0,0,0,0.3)'}:{cursor:'pointer'}} onClick={() => apiRef.current.setPage(pageCount - 1)}/>
    </>
  );
}


export default CustomPagination;