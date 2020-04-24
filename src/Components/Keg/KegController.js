import React from "react";
import KegList from "./KegList";
import KegDetails from "./KegDetails";
import KegForm from "./KegForm";
import { Kegs } from "./../../PresetData/GasonsKegs";

class KegController extends React.Component{
  constructor(props){
    super(props)
    this.state={
      formVisible: false,
      selectedKeg: null,
      kegList: Kegs
    }
  }

  handleClick = () => {
    //checks if click is from details page to reset to initial state
    if(this.state.selectedKeg !== null) {
      this.setState({
        formVisible: false,
        selectedKeg: null,
      })
    } else {
      this.setState(prevstate => ({
        formVisible: !prevstate.formVisible
      }));
    }
  }

  handleAddNewKeg = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      formVisible: false,
      kegList: newKegList
    })
  }

  handleChangeingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0]
    this.setState({
      selectedKeg: selectedKeg
    })
  }

  setVisiblitiy = () => {
    if(this.state.selectedKeg !== null) {
      return{
        component: <KegDetails keg={this.state.selectedKeg}/>,
        buttonText: "Back to Kegs"
      }
    } else if (this.state.formVisible){
      return{
        component: <KegForm onKegCreation={this.handleAddNewKeg}/>,
        buttonText: "Back to Kegs"
      };
    } else {
      return{
        component: <KegList list={this.state.kegList} onSelectingKeg={this.handleChangeingSelectedKeg}/>,
        buttonText: "Add new Keg"
      }
    }
  }

  render(){
    const currentlyVisible = this.setVisiblitiy()
    return(
      <React.Fragment>
        <div style={{border: "2px solid gray", padding: "2%"}}>
          {currentlyVisible.component}
          <button onClick={this.handleClick}>{currentlyVisible.buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default KegController;