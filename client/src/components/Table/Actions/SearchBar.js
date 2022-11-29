import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";



/**
 * 
 * @component SearchBar
 * @param {obj[]} props 
 * 
 * @returns input field which searches multiple fields on input change
 */
const SearchBar = (props) => {

  useEffect(() => {
    props.searchResults.map((item) => {
      const y =
        item === "" || item === undefined || item === " "
          ? ""
          : item.toLowerCase();

      /** 
       * @param {obj} regex - Regular expression object to search for keyword entered in search field
       * 
       * @param {string} y 
       * */

      const regex = new RegExp(y);

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
  }, [props.fetchedRows, props.searchResults]);


  /**
   * @function handleSearchResults:  pushes data of input string into search Results as array of strings
   * @param {char} e - character entered in search field, splits string if ',' is entered hence, creates an array of strings.
   */
  const handleSearchResults = (e) => {
    if (e === '' || e === undefined || e === "" || e === ' ') props.setSearchResults([''])
    else
      props.setSearchResults(
        e.split(",")
          .map((value) => value.trim())
          .filter((value) => value !== "")
      );
  };
/**
 * TODO enable handleOnClick to prevent multiple get requests
 * TODO implement debouncing 
 * */
  const handleOnClick = ((value) => {
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
export default SearchBar