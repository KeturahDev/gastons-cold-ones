import React from 'react';
import Header from "./Header";
import KegController from "./Keg/KegController";

function App() {
  return (
    <React.Fragment>
      <div className="App">
          <Header/>
          <KegController/>
      </div>
    </React.Fragment>
  );
}

export default App;
