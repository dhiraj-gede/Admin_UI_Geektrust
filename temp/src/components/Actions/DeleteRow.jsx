import {useEffect} from 'react'
export default function DeleteRow({setTableRows,deleteRow}){
    useEffect(()=>{
        const  deleteRowOnClick=(()=>{
            setTableRows((rows)=>rows.filter(r=>{ return !( r.id===deleteRow.id)}))
        })
        deleteRowOnClick()
    }, [deleteRow.id, setTableRows])
   
}