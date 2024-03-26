import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setArtworkData } from "./redux/artworkSlice";
import Interface from "./components/Interface";

const App = () => {
  const dispatch = useDispatch();

  const getArtworks = async () => {
    const { data } = await axios.get(`https://api.artic.edu/api/v1/artworks`);
    dispatch(setArtworkData(data.data));
  };

  useEffect(() => {
    getArtworks();
  }, []);
  return (
    <>
      <Interface />
    </>
  );
};

export default App;
