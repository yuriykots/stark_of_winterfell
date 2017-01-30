import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CharacterGrid from'./CharacterGrid';




const IndexPage = () => (
  <MuiThemeProvider>
    <CharacterGrid/>
  </MuiThemeProvider>
);

export default IndexPage;





//<MuiThemeProvider>
  //<MyAwesomeReactComponent />
//</MuiThemeProvider>
