import React from 'react';
import PropTypes from 'prop-types';
import {v4} from "uuid";

function KegForm(props){

  const handleOnFormSubmit = (event) => {
    event.preventDefault()
    props.onKegCreation({
      name: event.target.name.value, 
      id: v4(),
      brand: event.target.brand.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
      description: event.target.description
    })
  }

  return(
    <React.Fragment>
      <div style={{border: "2px solid orange"}}>
        <form onSubmit={handleOnFormSubmit}>
          <input type="text" name="name" placeholder="Drink's Name" /><br/>
          <input type="text" name="brand" placeholder="brand" /><br/>
          <input type="text" name="alcoholContent" placeholder="Alcohol Content" /><br/>
          <input type="text" name="price" placeholder="Price per Pint" /><br/>
          <input type="text" name="description" placeholder="Describe this drink" /><br/>
          <button type="submit">submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

KegForm.propTypes = {
  onKegCreation: PropTypes.func
}
export default KegForm; 