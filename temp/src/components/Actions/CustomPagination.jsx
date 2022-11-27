import Button from "@mui/material/Button";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import Pagination from "@mui/material/Pagination";

export default function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <>
      <Button variant="contained" onClick={() => apiRef.current.setPage(0)}>
        firstPage
      </Button>

      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
      <Button
        variant="contained"
        onClick={() => apiRef.current.setPage(pageCount - 1)}
      >
        lastPage
      </Button>
    </>
  );
}
