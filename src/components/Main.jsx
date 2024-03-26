import React from "react";
import { useSelector } from "react-redux";
import { selectArtworkData } from "../redux/artworkSlice";
import Artwork from "./Artwork";
import Spinner from "./Spinner";

const Main = () => {
  const artworkData = useSelector(selectArtworkData);
  //console.log(artworkData);
  if (!artworkData) {
    return (
      <>
        <p>Loading ... </p>
        <Spinner />
      </>
    );
  }

  return artworkData.map((artwork) => {
    return <Artwork key={artwork.id} artwork={artwork} />;
  });
};

export default Main;
