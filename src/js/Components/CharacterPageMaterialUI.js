import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CharacterPage from'./CharacterPage';




const MaterialPageMaterialUI = () => (
  <MuiThemeProvider>
    <CharacterPage/>
  </MuiThemeProvider>
);

export default MaterialPageMaterialUI;





//<MuiThemeProvider>
  //<MyAwesomeReactComponent />
//</MuiThemeProvider>
