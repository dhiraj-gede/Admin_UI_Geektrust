import React, {useEffect} from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {

  
  useEffect(() => {
    props.searchResults.map((item) => {
      const y =
        item === "" || item === undefined || item === " "
          ? ""
          : item.toLowerCase();
      const regex = new RegExp(y);
      console.log(props)
      return props.setTableRows(
        props.fetchedRows.filter(
          (e) =>
            e.name.toLowerCase().match(regex) ||
            e.id.toLowerCase().match(regex) ||
            e.email.toLowerCase().match(regex) ||
            e.role.toLowerCase().match(regex)
        )
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ props.fetchedRows, props.searchResults]);

  const handleSearchResults = (e) => {
    if(e===''||e===undefined||e===""|| e===' ') props.setSearchResults([''])
    else
    props.setSearchResults(
      e.split(",")
    .map((value) => value.trim())
    .filter((value) => value !== "")
    );
  };
  
const handleOnClick=((value)=>{
  props.setSearchResults(value)
})
  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 300 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search: id/ name/ email/ role "
          inputProps={{ "aria-label": "search Fields" }}
          onChange={(e) => handleSearchResults(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={() => handleOnClick(props.searchResults)}>
          <SearchIcon />
        </IconButton>
      </Paper>
      
    </>
  );
}
