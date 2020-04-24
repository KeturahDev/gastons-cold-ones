import React from 'react';
import PropTypes from 'prop-types';
function Keg(props){

  const handleShowDetails =()=> {
    //trigger details to show in controller
  }

  return(
    <React.Fragment>
      <div onClick={() => props.showDetails(props.id)} style={{border: "2px solid pink", padding: "2%"}}>
        <h3 onClick={props.showDetails} >{props.name}</h3>
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
  showDetails: PropTypes.func
}

export default Keg;