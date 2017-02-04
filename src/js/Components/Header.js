import React from "react";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';


const styles = {
  button: {
    color: '#616161',
    height: "50px",
    width: "400px",
    margin: "auto",
    "margin-top": "10px",
  },
};

export default class Header extends React.Component{
  render(){
    return(
      <div className="headerbox">
        <FlatButton
         label="House Of Starks"
         style={styles.button}
         labelStyle={{fontSize: '28px'}}
          icon={<ActionAccountBalance />}
         />
      </div>
    )
  }
}

/*
<AppBar
  style={styles.bar}
   title="Family of Stark"
   iconElementRight={<FlatButton label="HOME" />}
 />
 */
