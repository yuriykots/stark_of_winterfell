import React from "react";
import characters from "../../data/characters"
import NotFound from "./NotFound"



export default class CharacterPage extends React.Component{
  render(){
    const id = this.props.params.id;
    console.log("hello5")
    console.log(characters)

    //const athlete = athletes.filter((athlete) => athlete.id === id)
     var character = characters.filter((char) => char.id === id)[0];
     //console.log(character.image)
     if (!character){
       return (
         <NotFound/>
       )
     }

//    console.log(athletes)
    return(
      <div >
        <h2 className="name"> {character.name} </h2>
        <img className="picture-container" src={`/img/${character.image}`}/>
      </div>
    )
  }
}
