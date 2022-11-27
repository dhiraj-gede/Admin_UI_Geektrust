import React, { useEffect, useCallback } from "react";
import "./DrawTable.css";
import {
  DataGrid,
  GridRowModes,
  GridColumns,
  GridRowsProp,
  GridCellEditCommitParams,
  useGridApiRef,
  GridCellModes,
} from "@mui/x-data-grid";
import SearchBar from "../Actions/SearchBar";
import DeleteSelected from "../Actions/DeleteSelected";
import PropTypes from "prop-types";
import { bgcolor, gridClasses } from "@mui/system";
import { grey } from "@mui/material/colors";
import { GridApi } from "@mui/x-data-grid-pro";
import { ButtonUnstyled } from "@mui/base";
import { Box, Button } from "@mui/material";
import Toolbar from "./../Actions/Toolbar";
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

  const handleCellKeyDown = React.useCallback(
    (params, event) => {
      if (cellMode === "edit") {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
  );

  return (
    <>
      {/* {console.log('here',props.rowId)} */}
      <div
        style={{
          display: "flex",
          background: "white",
          height: "95vh",
          maxHeight:'800px',
          width: "100%",
          maxWidth:'650px',
          justifyContent: "center",
        }}
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
          editMode="row"
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          // onCellKeyDown={handleCellKeyDown}
          // cellModesModel={cellModesModel}
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
          keepNonExistentRowsSelected
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
              handleDeleteSelectedRow: props.handleDeleteSelectedRow,
            },
          }}
        />
      </div>
    </>
  );
}
