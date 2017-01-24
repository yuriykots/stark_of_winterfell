import React from "react";
import { Link } from "react-router";

export default class CharacterPreview extends React.Component{
  render(){

    return(
      <div className="character-preview">
      <Link to={`/character/${this.props.id}`}>

        <h4> {this.props.name} </h4>

        <img className="card-Picture" src={`/img/${this.props.image}`}/>
</Link>
      </div>
    )
  }
}

      //    <Link to={`/character/${this.props.id}`}>
