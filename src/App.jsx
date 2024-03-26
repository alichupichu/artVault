import React, { useEffect } from "react";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const getObjectsIDs = async () => {
    const { data } = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers`
    );
    console.log(data);
  };

  useEffect(() => {
    getObjectsIDs;
  }, []);
  return <></>;
};

export default App;
