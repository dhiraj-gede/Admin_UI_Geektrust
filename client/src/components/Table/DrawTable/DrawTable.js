import React from "react";
import {
  DataGrid,
} from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
import Toolbar from "../DrawTable/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import './DrawTable.css'
import { useSnackbar } from 'notistack'
import { Box } from "@mui/system";

/**
 * @param {obj} myTheme  - Hover and selectedRow css properties
 */
const myTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {

        row: {

          "&.Mui-selected": {
            backgroundColor: grey[300],

            "&:hover": {
              backgroundColor: grey[200],
            },
          },
          
        },
      },
    },
  },
});

/**
 * Component responsible for rendering Admin UI table
 * @component DrawTable
 * @returns DataGrid 
 */

const DrawTable = (props) => {
  const { enqueueSnackbar } = useSnackbar()


  return (
    <>
      <ThemeProvider theme={myTheme}>

        <Box
          className='datagrid-container'
          style={{
            display: "flex",
            background: "white",
            height: "95vh",
            maxHeight: "801px",
            width: "100%",
            maxWidth: "650px",
            justifyContent: "center",
          }}
        >
          {/**
           * 
           * @param DataGrid - prints table
           * 
           * 
           */}

          <DataGrid
            /**
             * @param disableSelectionOnClick - If true, the selection on click on a row or cell is disabled.
             * 
             * @default
             * false
             */
            disableSelectionOnClick


            /**
             * Feeds data to grid
             */
            rows={props.rows}
            columns={props.columns.map((column) => {
              return {
                ...column,
                cellClassName: `${column.field}-${column.field}`,
              };
            })}




            /**
             * handles mode of rows: edit/ view
             */
            onCellFocusOut={(param, event) => {
              return props.setEditedRow([param.row]);
            }
            }

            onRowEditStart=
            {
              (param, event) => {
                enqueueSnackbar(
                  `Editing Row id: ${param.row.id}`,
                  { variant: "warning" }
                )
              }
            }

            onRowEditStop=
            {
              (param, event) => {
                event.key === 'Enter' ?
                  enqueueSnackbar(
                    `Saved Row id: ${param.row.id}`,
                    { variant: "success" }
                  )
                  : enqueueSnackbar(
                    `Not saved, Row id: ${param.row.id}`,
                    { variant: "error" }
                  )
              }
            }



            /**
             * row edit props
             */
            editMode="row"
            experimentalFeatures={{ newEditingApi: true }}



            /**
             * apply spacing between rows
             */
            getRowSpacing={(params) => ({
              top: params.isFirstVisible ? 0 : 5,
              bottom: params.isLastVisible ? 0 : 5,
            })}



            /**
             * 
             * pagination props
             * 
             */
            pageSize={10}
            rowCount={props.tableRows.length}
            paginationMode="server"
            onPageChange={(newPage) => {
              props.handleSelectCurrentPageRows(newPage);
            }}



            /**
             * selection props
             */
            checkboxSelection
            setSelectionModel={props.setSelectionModel}
            onSelectionModelChange={(newSelectionModel) => {
              props.setSelectionModel(newSelectionModel);
            }}
            keepNonExistentRowsSelected



            /**
             * Grid components.
             */
            components={{
              Toolbar: Toolbar,
              Footer: Footer,
            }}

            /**
             * method to pass props to components
             */
            componentsProps={{
              /**toolbar props */
              toolbar: {
                setTableRows: props.setTableRows,
                tableRows: props.tableRows,
                fetchedRows: props.fetchedRows,
                searchResults: props.searchResults,
                setSearchResults: props.setSearchResults,

              },
              /**footer props */
              footer: {
                setSelectionModel: props.setSelectionModel,
                selectionModel: props.selectionModel,
                setFetchedRows: props.setFetchedRows,
                fetchedRows: props.fetchedRows
              },
            }}
          />
        </Box>
      </ThemeProvider>
    </>
  );
}
export default DrawTable