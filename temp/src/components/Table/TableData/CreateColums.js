// Design of Table structure (defining Columns)


import { useState, useEffect } from "react";
import RowActions from "../Actions/RowActions";
export default function CreateColums(props) {
  // eslint-disable-next-line no-unused-vars
  const [columns, setColumns] = useState(
    [
      {
        field: "id",
        headerName: "ID",
        headerClassName: 'admin-ui--header',
        type: "number",
        sortable: true,
        filterable: false,
        hideable: false,
        width: 70,
        editable: false,
        disableColumnMenu: true,
      },
      {
        field: "name",
        headerClassName: 'admin-ui--header',
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
        headerClassName: 'admin-ui--header',
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
        headerClassName: 'admin-ui--header',
        headerName: "Role",
        width: 100,
        sortable: false,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        editable: true,
      },
      {
        field: "actions",
        headerClassName: 'admin-ui--header',
        headerName: "Actions",
        type: "actions",
        width: 150,
        editable: false,
        renderCell: (params) => {
          return (
            <>
              <RowActions
                api={params.api}
                {...{ params }}
                setDeleteRow={props.setDeleteRow}
                setFetchedRows={props.setFetchedRows}
                fetchedRows={props.fetchedRows}
                setTableRows={props.setTableRows}
                tableRows={props.tableRows}

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
}