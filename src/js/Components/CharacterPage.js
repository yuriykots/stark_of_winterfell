import React from "react";
import characters from "../../data/characters"
import NotFound from "./NotFound"
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundImage: '/img/robb-stark.jpg',
};

const imageStyle = {


};

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
      <div className="boxcontainer">

                  <div className="box1">
                  <img src={character.cover}/>
                  </div>

                  <div className="box1">
                  <h2> {character.name} </h2>
                  <p> "{character.quote}"</p>
                  </div>

                  <div className="box1">
                  {character.info}
                  </div>

      </div>
    )
  }
}
