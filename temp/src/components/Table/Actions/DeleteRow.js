import {useEffect} from 'react'

export default function DeleteRow({setFetchedRows,deleteRow}){

const  deleteRowOnClick=(()=>{
    setFetchedRows((rows)=>rows.filter(r=>{ return !( r.id===deleteRow.id)}))
})
    useEffect(()=>{
        
        deleteRowOnClick()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteRow.id, setFetchedRows])
}