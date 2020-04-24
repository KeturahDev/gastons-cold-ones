import React from 'react';
import PropTypes from 'prop-types';
function Keg(props){
  return(
    <React.Fragment>
      <div style={{border: "2px solid pink", padding: "2%"}}>
      <div onClick={() => props.showDetails(props.id)}>
        <h3 onClick={props.showDetails} >{props.name}</h3>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.alcContent}</p>
      </div>
      {// If pints are more than zero
        props.pints > 0 &&
        <button onClick={() => props.sellPint(props.id)}>Sell Pint</button>
      }
      { //if pints are less than 10
        props.pints <=10 && props.pints > 0 &&
        <p>This keg is almost empty!</p>
      }
      { //if pints are at 0
        props.pints == 0 &&
        <p>This keg is empty.</p>
      }
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
  showDetails: PropTypes.func,
  sellPint: PropTypes.func
}

export default Keg;