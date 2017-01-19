import React from "react";


export default class CharacterPage extends React.Component{
  render(){

    const id = this.props.params.id;
    console.log(this.props.params.id)
    return(
      //<h1> This is Character page </h1>
      <h1> This page will be about {id} </h1>

    )
  }
}
