import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends React.Component{
  render() {
    console.log("hello")

    return (
<MuiThemeProvider>
    <div>
      <Header/>
      <div > {this.props.children} </div>
      <Footer/>
    </div>
</MuiThemeProvider>
    );
  }
}



} else if (props) {
      // if we got props then we matched a route and can render
      const markup = renderToString(<RouterContext {...props}/>)
      res.render('index', { markup });
