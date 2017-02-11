import React from "react";



export default class Footer extends React.Component{
  render(){
    return(
      <div className="footerbox">

          <p> This APP was created to learn universal rendering with React Router </p>
          <p> material-ui components were used to style this project </p>
          <p> You can check it on <a href="https://github.com/yuriykots/stark_of_winterfell">GitHub</a> </p>
      </div>
    )
  }
}
