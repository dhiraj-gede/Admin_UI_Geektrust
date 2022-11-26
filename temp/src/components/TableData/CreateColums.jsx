import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RowActions from "../Actions/RowActions";
export default function CreateColums(props) {
  // eslint-disable-next-line no-unused-vars
  // const [rowId,setRowId]=useState(null)
  const [columns, setColumns] = useState(
    [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        sortable: false,
        filterable: false,
        hideable: false,
        width: 100,
        editable: false,
        disableColumnMenu: true,
      },
      {
        field: "name",
        headerName: "Name",
        width: 130,
        sortable: false,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        editable: true,
      },
      {
        field: "email",
        headerName: "Email",
        width: 130,
        sortable: false,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        editable: true,
      },
      {
        field: "role",
        headerName: "Role",
        width: 100,
        sortable: false,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        editable: true,
      },
      // {
      //   field: "Actions",
      //   headerName: "Actions",
      //   width: 150,
      //   editable: false,
      //   renderCell: (params) => {
      //     const setDelR = (e) => {

      //       const api = params.api;
      //       // console.log('row',api.getRow(params.id))

      //       props.setDeleteRow(api.getRow(params.id)); //update DeleteRow to clicked row
      //     };
      //     const setEditR = (e) => {
      //       // const api = params.api;
      //       // setColumns(() => {
      //       //   const temp = [...columns];
      //       //   temp[1].editable = temp[1].editable === true ? false : true;
      //       //   return temp;
      //       // });
      //       // api.getColumn("name").editable =
      //       //   api.getColumn("name").editable === true ? false : true;
      //       // api.getColumn("email").editable =
      //       //   api.getColumn("email").editable === true ? false : true;
      //       // api.getColumn("role").editable =
      //       //   api.getColumn("role").editable === true ? false : true;
      //       // props.handleEditable();
      //       // console.log(
      //       //   api.getColumn("name").editable,
      //       //   props.isEditable,
      //       //   columns[1].editable
      //       // );

      //     };
      //     return (
      //       <strong style={{ display: "flex", justifyContent: "space-around" }}>
      //         <Button
      //           className="edit-btn"
      //           style={{
      //             color: "purple",
      //             cursor: "pointer",
      //             padding: "0.5rem",
      //           }}
      //           onClick={setEditR}
      //         >
      //           {columns[1].editable === false ? <EditOutlinedIcon /> : "save"}
      //         </Button>
      //         <Button
      //           className="delete-btn"
      //           varient="outlined"
      //           style={{ color: "red" }}
      //           onClick={setDelR}
      //         >
      //           <DeleteForeverOutlinedIcon />
      //         </Button>
      //       </strong>
      //     );
      //   },
      //   disableClickEventBubbling: true,
      // },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        editable: false,
        renderCell: (params) => {
          return (
            <>
              {/* <Button onClick={setDelR}>click</Button> */}
              <RowActions
                api={params.api}
                {...{ params }}
                rowId={props.rowId}
                setRowId={props.setRowId}
                editableRow={props.editableRow}
                setDeleteRow={props.setDeleteRow}
                setEditableRow={props.setEditableRow}
              />
            </>
          );
        },
      },
    ],
    [props.rowId]
  );

  useEffect(() => {
    props.handleColumnChange(columns);
  }, [columns, props, props.handleColumnChange]);

  // return console.log('Row',rowId)
}
