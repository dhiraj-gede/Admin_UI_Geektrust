import React from "react";
import "./DrawTable.css";
import {
  DataGrid,
} from "@mui/x-data-grid";
import DeleteSelected from "../Actions/DeleteSelected";
import { grey } from "@mui/material/colors";
import Toolbar from "../DrawTable/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Footer";

const myTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {

        row: {

          "&.Mui-selected": {
            backgroundColor: grey[300],

            "&:hover": {
              backgroundColor: grey[100],
            },
          },
          "& .MuiDataGrid-row": {
            "&:hover": {
              backgroundColor: grey[100],
            },
          },
        },
      },
    },
  },
});





export default function DrawTable(props) {


  return (
    <>
      <ThemeProvider theme={myTheme}>
        
        <div
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
          <DataGrid
            disableSelectionOnClick
            rows={props.rows}
            columns={props.columns.map((column) => {
              return {
                ...column,
                cellClassName: `${column.field}-${column.field}`,
              };
            })}
          
            editMode="row"
            getRowSpacing={(params) => ({
              top: params.isFirstVisible ? 0 : 5,
              bottom: params.isLastVisible ? 0 : 5,
            })}
            
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
              Footer: Footer,
            }}
            componentsProps={{
              toolbar: {
                setTableRows: props.setTableRows,
                tableRows: props.tableRows,
                fetchedRows: props.fetchedRows,
                searchResults: props.searchResults,
                setSearchResults: props.setSearchResults,
                
              },
              
              footer: {
                selectionModel: props.selectionModel,
                setFetchedRows: props.setFetchedRows,
                fetchedRows: props.fetchedRows
              },
            }}
          />
        </div>
      </ThemeProvider>
    </>
  );
}
