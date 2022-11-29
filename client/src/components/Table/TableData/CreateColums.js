// Design of Table structure (defining Columns)

import { useState, useEffect } from "react";
import RowActions from "../Actions/RowActions";


/**
 * 
 *@component CreateColums {yes, misspelled I know, but it works :). }
 *@returns blueprint of fields for DataGrid.
 * 
 */
const CreateColums = (props) => {
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
        width: 40,
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
        width: 180,
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
        width: 80,
        sortable: false,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        editable: true,
      },



      {
        /**
      * @param field Actions, a custom field 
      * that adds a column to every row, contains 
      * two buttons for delete and edit operations
      * @example 
      * return(
      * <>
      * <Button>Edit<Button>
      * <Button>Delete<Button>
      * </>
      * )
      */
        field: "actions",
        headerClassName: 'admin-ui--header',
        headerName: "Actions",
        type: "actions",
        width: 150,
        editable: false,

        /**
         * @param renderCell - renders in each cell 
         */
        renderCell: (params) => {
          return (
            <>
              <RowActions
                api={params.api}
                {...{ params }}
                setDeleteRow={props.setDeleteRow}
                setEditedRow={props.setEditedRow}
              />
            </>
          );
        },
      },
    ]
  );

  useEffect(() => {
    props.handleColumnChange(columns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, props.handleColumnChange]);
}


export default CreateColums;