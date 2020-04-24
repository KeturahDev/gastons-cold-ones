import React from "react";
import KegList from "./KegList";
import KegDetails from "./KegDetails";
import KegForm from "./KegForm";

class KegController extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    //conditional for rendering KegList, KegDetails, KegForm

    return(
      <React.Fragment>
        <div>
          <KegList />
          <KegDetails />
          <KegForm />
        </div>
      </React.Fragment>
    );
  }
}

export default KegController;