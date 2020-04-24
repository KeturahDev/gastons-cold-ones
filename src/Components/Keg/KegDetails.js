import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props){
  const { keg } = props
  return(
    <React.Fragment>
      <div style={{border: "2px solid purple"}}>
        <h2>{keg.name}</h2>
        <p>{keg.description}</p>
        <p>{keg.band}</p>
        <p>{keg.price}</p>
        <p>{keg.alcoholContent}</p>
        <p>{keg.pints}</p>
      </div>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object
}
export default KegDetails;