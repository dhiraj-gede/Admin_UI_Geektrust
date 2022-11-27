import { useEffect } from "react";
import axios from "axios";


import {endpoint} from '../../../App'
import { useSnackbar } from 'notistack'




function FetchRows(props) {
const { enqueueSnackbar} = useSnackbar()

  useEffect(() => {
    performAPICall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const performAPICall = async () => {
    const URL = endpoint;
    // console.log(URL);
    try {
      const response = await axios.get(URL);
      const data = response.data;
      // console.log(data);
      props.handleRowChange(data);
      return data;
    } catch (e) {
      if (e.response) {
        console.log(e.response.message);
        enqueueSnackbar(e.response.message, { variant: "error" });
      } else {
        console.log(e,
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON."
        );
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" }
        );
      }
      return [];
    }
  };
}

export default FetchRows;
