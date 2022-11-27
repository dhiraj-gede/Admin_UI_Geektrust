import React, { useState, useEffect } from "react";
import "./Home.css";
import DrawTable from "./DrawTable/DrawTable";
import FetchRows from "./TableData/FetchRows";
import CreateColums from "./TableData/CreateColums";
import SelectRowsOfCurrentPage from "./Actions/SelectRowsOfCurrentPage";
import DeleteRow from "./Actions/DeleteRow";
export default function Home(props) {
  // eslint-disable-next-line no-unused-vars
  const [isEditable, setIsEditable] = useState(null);
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

  function handleEditable() {
    isEditable === false ? setIsEditable(() => true) : setIsEditable(true);
    // console.log("called", isEditable);
  }
  const handleCellEditCommit = (params) => {
    setRowId(params.id);
  };

  useEffect(() => {
    console.log("rowId", rowId);
    console.log("editablerow", editableRow);
    console.log(fetchedRows)

    const newRows = SelectRowsOfCurrentPage(selectCurrentPageRows, tableRows);
    setRows(newRows);
  }, [fetchedRows, searchResults, rowId, selectCurrentPageRows, tableRows, editableRow]);

  return (
    <>
      <DeleteRow deleteRow={deleteRow} setTableRows={setTableRows} />

      <div
        // style={{
        //   // display: "flex",
        //   height: "100vh",
        //   width: "100%",
        //   // justifyContent: "center",
        //   // alignItems: "center",
        //   // background: "gray",
        // }}
        // style={{ height: 300, width: '100%' }}
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
        />
        <FetchRows handleRowChange={handleRowChange} />
        <CreateColums
          setEditableRow={setEditableRow}
          editableRow={editableRow}
          handleEditable={handleEditable}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          setDeleteRow={setDeleteRow}
          handleColumnChange={handleColumnChange}
          rowId={rowId}
          setRowId={setRowId}
        />
      </div>
    </>
  );
}
