import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setObrasData } from "./redux/obrasSlice";
import Interface from "./components/Interface";

const App = () => {
  const dispatch = useDispatch();

  const getObjectsIDs = async () => {
    const { data } = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunrise`
    );
    dispatch(setObrasData(data.objectIDs));
  };

  useEffect(() => {
    getObjectsIDs();
  }, []);
  return (
    <>
      <Interface />
    </>
  );
};

export default App;
