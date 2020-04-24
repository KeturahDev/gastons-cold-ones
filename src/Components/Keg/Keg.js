import React from 'react';
import PropTypes from 'prop-types';
function Keg(props){
  return(
    <React.Fragment>
      <div style={{border: "2px solid pink", padding: "2%"}}>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.alcContent}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propType = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcContent: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
  pints: PropTypes.string,
}

export default Keg;