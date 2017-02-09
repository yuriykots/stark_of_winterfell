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

            <div className="leftbox">

                  <div className="box1">
                  <img src={character.image}/>
                  </div>

                  <div className="box2">
                  <h2> Eddard Stark </h2>
                  <p> "The man who passes the sentence should swing the sword." </p>
                  </div>
                  <div className="box2">
                  <h2> Eddard Stark </h2>
                  <p> "The man who passes the sentence should swing the sword." </p>
                  </div>
                  <div className="box2">
                  <h2> Eddard Stark </h2>
                  <p> "The man who passes the sentence should swing the sword." </p>
                  </div>
                  <div className="left1">
                  King Robb Stark is a major character in the first, second, and third seasons. He also appears in flashback form in the sixth season. He is played by starring cast member Richard Madden and debuts in the series premiere. Robb is the eldest son of Lord Eddard Stark of Winterfell and his wife, Lady Catelyn. He is the brother of Sansa, Arya, Bran, and Rickon Stark, and cousin (believed to be half-brother) of Jon Snow. He also adopts a direwolf named Grey Wind. Robb is declared the King in the North during the War of the Five Kings. Despite his young age, he commands great respect and is notable for never having lost a battle, earning himself the nickname the Young Wolf - after the sigil of his house. He rules the North and the Riverlands until he is murdered at the Red Wedding, alongside his pregnant wife, his mother, and many of his lords' bannermen, by Houses Frey and Bolton.
                  </div>

                  <div className="left2">
                  </div>

                  <div className="left3">
                  </div>
            </div>

      </div>
    )
  }
}
/*

                 <img src={character.image}/>
                <div className="picture-container">
                <h4 className="name">{character.name}</h4>
                </div>

                <div className="text-container">
                  <h4> {character.info} </h4>
                </div>

                */
