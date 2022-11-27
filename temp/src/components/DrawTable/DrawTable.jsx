import React from "react";
import "./DrawTable.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteSelected from "../Actions/DeleteSelected";
import { Box } from "@mui/material";
import Toolbar from "./../Actions/Toolbar";
import PropTypes from 'prop-types';
// propTypes are available in temp file present in propType folder under components
DeleteSelected.propTypes = {
  selectionModel: PropTypes.array.isRequired,
  setTableRows: PropTypes.func.isRequired,
};


Toolbar.propTypes = {
  cellMode: PropTypes.oneOf(["edit", "view"]).isRequired,
  cellModesModel: PropTypes.object.isRequired,
  selectedCellParams: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
  setCellModesModel: PropTypes.func.isRequired,
};
export default function DrawTable(props) {
  const [selectedCellParams, setSelectedCellParams] = React.useState(null);
  const [cellModesModel, setCellModesModel] = React.useState({});

  const handleCellFocus = React.useCallback((event) => {
    const row = event.currentTarget.parentElement;
    const id = row.dataset.id;
    const field = event.currentTarget.dataset.field;
    setSelectedCellParams({ id, field });
  }, []);

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return "view";
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || "view";
  }, [cellModesModel, selectedCellParams]);

  

  return (
    <>
      {/* {console.log('here',props.rowId)} */}
      <Box
        // style={{
        //   display: "flex",
        //   background: "white",
        //   height: "100vh",
        //   maxHeight:'793.5px',
        //   width:'100%',
        //   maxWidth:'676.771px',
        //   // minWidth:'',
        //   justifyContent: "center",
        // }}
        style={{ display: "flex",height: '94vh', width: '100%',maxHeight:'793.5px', maxWidth:'676.771px',}}
        className="data-table"
        id="admin-table"
        data-id="admin-table"
      >
        <DataGrid
          disableSelectionOnClick
          rows={props.rows}
          columns={props.columns.map((column) => {
            return {
              ...column,
              cellClassName: `${column.field}-${column.field}`,
            };
          })}
          // getRowId={(row) => {
          //   return row.id;
          // }}
          editmode="row"
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          editMode="row"
          // onCellKeyDown={handleCellKeyDown}
          cellModesModel={cellModesModel}
          // onCellModesModelChange={(model) => setCellModesModel(model)}
          pageSize={10}
          checkboxSelection
          rowCount={props.tableRows.length}
          paginationMode="server"
          onPageChange={(newPage) => {
            props.handleSelectCurrentPageRows(newPage);
          }}
          onSelectionModelChange={(newSelectionModel) => {
            props.setSelectionModel(newSelectionModel);
          }}
          setSelectionModel={props.setSelectionModel}
          // keepNonExistentRowsSelected
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: Toolbar,
            Footer: DeleteSelected,
          }}
          componentsProps={{
            toolbar: {
              setTableRows: props.setTableRows,
              fetchedRows: props.fetchedRows,
              searchResults: props.searchResults,
              setSearchResults: props.setSearchResults,
              cellMode,
              selectedCellParams,
              setSelectedCellParams,
              cellModesModel,
              setCellModesModel,
            },
            cell: {
              onFocus: handleCellFocus,
            },
            footer: {
              selectionModel: props.selectionModel,
              setTableRows: props.setTableRows,
              // handleDeleteSelectedRow: props.handleDeleteSelectedRow,
            },
          }}
        />
      </Box>
    </>
  );
}
