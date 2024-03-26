import React from "react";

const Artwork = (props) => {
  return (
    <div className="artcard">
      <h2>{props.data.title}</h2>
      <img
        src={`https://www.artic.edu/iiif/2/${props.data.image_id}/full/843,/0/default.jpg`}
        alt={props.data.alt_text}
      />
      <p>By {props.data.artist_title}</p>
      <p>Date of creation: {props.data.date_display}</p>
      <p>Measurements: {props.data.dimensions}</p>
      <div>{props.data.description}</div>
    </div>
  );
};

export default Artwork;
