import React, { useState, useEffect } from "react";
import DrawTable from "./DrawTable/DrawTable";
import FetchRows from "./TableData/FetchRows";
import CreateColums from "./TableData/CreateColums";
import SelectRowsOfCurrentPage from "./Actions/SelectRowsOfCurrentPage";
import DeleteRow from "./Actions/DeleteRow";
export default function Home(props) {
  const [rowId, setRowId] = useState(null);
  const [editableRow, setEditableRow] = useState(null);
  const [fetchedRows, setFetchedRows] = useState([]);
  const [searchResults, setSearchResults] = useState([""]);
  const [deleteRow, setDeleteRow] = useState("");
  const [tableRows, setTableRows] = useState([]);
  const [rows, setRows] = useState([]);
  const [tablecolumns, setTableColumns] = useState([]);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [selectCurrentPageRows, handleSelectCurrentPageRows] =
    React.useState(0);
  const handleRowChange = (value) => {
    setTableRows(value);
    setFetchedRows(value);
  };
  const handleColumnChange = (value) => {
    setTableColumns(value);
  };
  const handleCellEditCommit = (params) => {
    setRowId(params.id);
  };

  useEffect(() => {
   const newRows = SelectRowsOfCurrentPage(selectCurrentPageRows, tableRows);
    setRows(newRows);
  }, [fetchedRows, searchResults, rowId, selectCurrentPageRows, tableRows, editableRow]);

  return (
    <>
      <DeleteRow deleteRow={deleteRow} setFetchedRows={setFetchedRows} />

      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          setRowId={setRowId}
          rowId={rowId}
          setEditableRow={setEditableRow}
          editableRow={editableRow}
          handleCellEditCommit={handleCellEditCommit}
          setFetchedRows={setFetchedRows}
        />
        <FetchRows handleRowChange={handleRowChange} />
        <CreateColums
          setEditableRow={setEditableRow}
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
