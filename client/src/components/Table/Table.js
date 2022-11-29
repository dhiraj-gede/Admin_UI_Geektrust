
import React, { useState, useEffect } from "react";
import DrawTable from "./DrawTable/DrawTable";
import FetchRows from "./TableData/FetchRows";
import CreateColums from "./TableData/CreateColums";
import SelectRowsOfCurrentPage from "./Actions/SelectRowsOfCurrentPage";
import DeleteRow from "./Actions/DeleteRow";
import { Box } from "@mui/system";




/**
 * 
 * @component Table is parent component of DataGrid and contains all states that are to be passed on to different components.
 * @returns DataGrid.
 */
const Table = () => {
  /** fetchedRows stores data coming from from api */
  const [fetchedRows, setFetchedRows] = useState([]);
  /**stores updated (for example on search filter) data in memory  */
  const [tableRows, setTableRows] = useState([]);
  /** stores rows that are to be displayed on each page --> max_rows allowed = 10 */
  const [rows, setRows] = useState([]);
  /** stores structure of Data (Column field) */
  const [tablecolumns, setTableColumns] = useState([]);                         


  //** keeps track of updates in current editable row */
  const [editedRow, setEditedRow] = useState([]);
  /** stores string coming from search field which is then used to filter rows */
  const [searchResults, setSearchResults] = useState([""]);                     
/** stores details of row to be deleted */
  const [deleteRow, setDeleteRow] = useState("");

  /**stores an array of selected rows. */
  const [selectionModel, setSelectionModel] = useState([]);
  /**stores an array of rows that are supposed to be rendered according to pagination. */
  const [selectCurrentPageRows, handleSelectCurrentPageRows] = useState(0);


/**
 * @function handleRowChange fetches data from api and stores it into 
 * @param setTableRows - tableRows keeps track of rows to be rendered in table
 *
 * @param fetchedRows keeps track of all rows coming from api
 * @param {obj[]} value - rows coming from api @example <FetchRows />
 */
  const handleRowChange = (value) => {
    setTableRows(value);
    setFetchedRows(value);
  };

/**
 * @function handleColumnChange fetches data from api and stores it into 
 * @param setTableColumn tableRows keeps track of rows to be rendered in table
 * @param {obj[]} value - columns coming from @example <CreateColumns />
 */

  const handleColumnChange = (value) => {
    setTableColumns(value);
  };



  useEffect(() => {
    setFetchedRows(() => fetchedRows.map(obj => editedRow.find(o => o.id === obj.id) || obj));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedRow])



  useEffect(() => {
    const newRows = SelectRowsOfCurrentPage(selectCurrentPageRows, tableRows);
    setRows(newRows);
  }, [fetchedRows, searchResults, selectCurrentPageRows, tableRows]);

  return (
    <>

      {/*
      passing props neccesary to delete single row */}
      <DeleteRow deleteRow={deleteRow} setFetchedRows={setFetchedRows} />

      <Box
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Table component */}
        <DrawTable
          rows={rows}
          onCellFocusOut={(params) => {
            console.log(params, params)
          }}
          setEditedRow={setEditedRow}
          columns={tablecolumns}
          selectionModel={selectionModel}
          setSelectionModel={setSelectionModel}
          handleSelectCurrentPageRows={handleSelectCurrentPageRows}
          tableRows={tableRows}
          fetchedRows={fetchedRows}
          setSearchResults={setSearchResults}
          setTableRows={setTableRows}
          searchResults={searchResults}
          // onRowModelChange
          setFetchedRows={setFetchedRows}
        />

        {/* Data Components */}
        <FetchRows handleRowChange={handleRowChange} />
        <CreateColums
          setEditedRow={setEditedRow}
          tableRows={tableRows}
          setTableRows={setTableRows}
          fetchedRows={fetchedRows}
          setFetchedRows={setFetchedRows}
          editedRow={editedRow}
          setDeleteRow={setDeleteRow}
          handleColumnChange={handleColumnChange}
        />
      </Box>
    </>
  );
}


export default Table;