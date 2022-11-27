//Admin UI Data Grid parent Page

//TODO Add proper Code Documentaion to entire codebase 
//sample comment document-->
/**
 * Returns x raised to the n-th power.
 *
 * @param {fetchedRows} fetchedRows Fetches array of objects from provided api
 * @param searchResults stores string entry from searchbar
 *
 */

import React, { useState, useEffect } from "react";
import DrawTable from "./DrawTable/DrawTable";
import FetchRows from "./TableData/FetchRows";
import CreateColums from "./TableData/CreateColums";
import SelectRowsOfCurrentPage from "./Actions/SelectRowsOfCurrentPage";
import DeleteRow from "./Actions/DeleteRow";
export default function Home(props) {
  const [rowId, setRowId] = useState(null);
  const [editableRow, setEditableRow] = useState(null);
  const [fetchedRows, setFetchedRows] = useState([]);                           //state to store fetched api
  const [searchResults, setSearchResults] = useState([""]);                     //stores string entry from searchbar
  const [deleteRow, setDeleteRow] = useState("");                               
  const [tableRows, setTableRows] = useState([]);
  const [rows, setRows] = useState([]);                                         //stores rows to be rendered according to the pagination (rows for each page)
  const [tablecolumns, setTableColumns] = useState([]);                         //column field structure of datagrid
  const [selectionModel, setSelectionModel] = React.useState([]);                 
  const [selectCurrentPageRows, handleSelectCurrentPageRows] = useState(0);     
  
  const handleRowChange = (value) => {
    setTableRows(value);
    setFetchedRows(value);
  };

  const handleColumnChange = (value) => {
    setTableColumns(value);
  };
  
//handles multiple select
  useEffect(() => {
   const newRows = SelectRowsOfCurrentPage(selectCurrentPageRows, tableRows);
    setRows(newRows);
  }, [fetchedRows, searchResults, rowId, selectCurrentPageRows, tableRows, editableRow]);

  return (
    <>

    {/*passing props neccesary to delete single row */}
      <DeleteRow deleteRow={deleteRow} setFetchedRows={setFetchedRows} />

      <div
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
          columns={tablecolumns}
          selectionModel={selectionModel}
          setSelectionModel={setSelectionModel}
          handleSelectCurrentPageRows={handleSelectCurrentPageRows}
          tableRows={tableRows}
          fetchedRows={fetchedRows}
          setSearchResults={setSearchResults}
          setTableRows={setTableRows}
          searchResults={searchResults}

          setFetchedRows={setFetchedRows}
        />
          
          {/* Data Components */}
        <FetchRows handleRowChange={handleRowChange} />
        <CreateColums
          setEditableRow={setEditableRow}
          tableRows={tableRows}
          setTableRows={setTableRows}
          fetchedRows={fetchedRows}
          setFetchedRows={setFetchedRows}

          editableRow={editableRow}
          setDeleteRow={setDeleteRow}
          handleColumnChange={handleColumnChange}
          rowId={rowId}
          setRowId={setRowId}
        />
      </div>
    </>
  );
}
