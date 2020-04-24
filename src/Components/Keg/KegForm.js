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

  const kegStyle={
    backgroundColor: "black",
    color: "rgb(175, 175, 175)",
    borderRadius: "10px",
    padding: "5%",
    textAlign: "center"
  }
  return(
    <React.Fragment>
      <div style={kegStyle}>
        <div className="row">
          <div className="col-md-4">
            <img src="https://media1.giphy.com/media/XI4Gl6KPVkOBgpLmhF/200w.webp?cid=ecf05e47549f2f2b0326215fb88985e02d8afc4311cc5e7e&rid=200w.webp" alt="gif"/>
          </div>
          <div className="col-md-4">
            <form onSubmit={handleOnFormSubmit}>
              <div className="form-group">
              <input type="text" name="name" placeholder="Drink's Name" /><br/>
              </div>
              <div className="form-group">
                <input type="text" name="brand" placeholder="brand" /><br/>
              </div>
              <div className="form-group">
                <input type="text" name="alcoholContent" placeholder="Alcohol Content" /><br/>
              </div>
              <div className="form-group">
                <input type="text" name="price" placeholder="Price per Pint" /><br/>
              </div>
              <div className="form-group">
                <input type="text" name="description" placeholder="Describe this drink" /><br/>
              </div>
              <button className="button" type="submit">Submit</button>
            </form>
          </div>
          <div className="col-md-4">
            <img src="https://media1.giphy.com/media/XI4Gl6KPVkOBgpLmhF/200w.webp?cid=ecf05e47549f2f2b0326215fb88985e02d8afc4311cc5e7e&rid=200w.webp" alt="gif"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

KegForm.propTypes = {
  onKegCreation: PropTypes.func
}
export default KegForm; 