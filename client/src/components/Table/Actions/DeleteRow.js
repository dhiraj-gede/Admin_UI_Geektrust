import {useEffect} from 'react'
import PropTypes from 'prop-types'

/**
 * Deletes single row on clicking button in present in actions toolbar.
 * @component DeleteRow
 * 
 */

 const  DeleteRow = ({setFetchedRows,deleteRow}) =>{

const  deleteRowOnClick=(()=>{
    setFetchedRows((rows)=>rows.filter(r=>{ return !( r.id===deleteRow.id)}))
})
    useEffect(()=>{
        deleteRowOnClick()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteRow.id, setFetchedRows])
}
export default DeleteRow;

DeleteRow.propTypes = {
    /** Row to be deleted */
    setFetchedRows: PropTypes.func
}