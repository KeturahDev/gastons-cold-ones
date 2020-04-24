import React from 'react';
import PropTypes from 'prop-types';
function Keg(props){

  const kegStyle={
    backgroundColor: "black",
    color: "rgb(175, 175, 175)",
    opacity: "1.0",
  }

  return(
    <React.Fragment>
      <div className="col-md-4 container" style={kegStyle}>
        <div className="row" onClick={() => props.showDetails(props.id)}>
          <div className="col-md-10 container">
            <h3 onClick={props.showDetails} >{props.name}</h3>
            <p>{props.brand}</p>

          </div>
          <div className="col-md-2 container">
            <p>{props.price}</p>
            <p>{props.alcCont}</p>
          </div>
        </div>
        {// If pints are more than zero
          props.pints > 0 &&
          <div className="centerBox">
            <button className="button" onClick={() => props.sellPint(props.id)}>Sell Pint</button>
          </div>
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