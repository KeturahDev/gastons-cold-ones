import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props){
  const { keg } = props
  const kegStyle={
    backgroundColor: "black",
    color: "rgb(175, 175, 175)",
    borderRadius: "10px",
    padding: "5%"
  }
  return(
    <React.Fragment>
      <div  style={kegStyle}>
        <h2>{keg.name}</h2>
        <p>Description: {keg.description}</p>
        <p>Brand: {keg.brand}</p>
        <p>Price: {keg.price}</p>
        <p>Alcohol Content: {keg.alcoholContent}</p>
        <p>Pints Left: {keg.pints}</p>
      </div>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object
}
export default KegDetails;