import React from "react";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router";


const styles = {
  button: {
    color: '#616161',
    height: "50px",
    width: "500px",
    margin: "auto",
    "margin-top": "10px",
    "margin-buttom": "10px",
  },
};

export default class Header extends React.Component{
  render(){
    return(
      <div className="headerbox">
      <Link to={`/`}>
        <FlatButton
         label="House Of Starks"
         style={styles.button}
         labelStyle={{fontSize: '35px'}}
         />
        </Link>
      </div>
    )
  }
}
