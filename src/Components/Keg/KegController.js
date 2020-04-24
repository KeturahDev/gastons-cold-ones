import React from "react";
import KegList from "./KegList";
import KegDetails from "./KegDetails";
import KegForm from "./KegForm";

class KegController extends React.Component{
  constructor(props){
    super(props)
    this.state={
      formVisible: false,
      selectedKeg: null,
      // kegList: 
    }
  }


  setVisiblitiy = () => {
    if(this.state.selectedKeg !== null) {
      return{
        component: <KegDetails/>,
        buttonText: "Back to Kegs"
      }
    } else if (this.state.formVisible){
      return{
        component: <KegForm/>,
        buttonText: "Back to Kegs"
      };
    } else {
      return{
        component: <KegList/>,
        buttonText: "Add new Keg"
      }
    }
  }

  render(){
    //conditional for rendering KegList, KegDetails, KegForm
    const currentlyVisible = this.setVisiblitiy()
    return(
      <React.Fragment>
        <div style={{border: "2px solid gray", padding: "2%"}}>
          {/* <KegList />
          <KegDetails />
          <KegForm /> */}
          {currentlyVisible.component}
          <button>{currentlyVisible.buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default KegController;