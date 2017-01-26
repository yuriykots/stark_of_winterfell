import React from "react";
import { Link } from "react-router";

var divStyle = {
  background: "#eee",
  margin: "1px",
  width: "33%",
  height: "200px",
}

export default class CharacterPreview extends React.Component{
  render(){

    return(
      <div className="character-box">
      <Link to={`/character/${this.props.id}`}>
        <h4> {this.props.name} </h4>
      </Link>
      </div>
    )
  }
}

      //    <Link to={`/character/${this.props.id}`}>
//<img className="card-Picture" src={`/img/${this.props.image}`}/>
