import React from "react";
import CharacterPreview from "./CharacterPreview"
import characters from "../../data/characters"

var divStyle = {
  "text-align": "center",
  "margin-top": "10px"
}


export default class IndexPage extends React.Component{

  render() {
    {characters.map(character => console.log(character))}

    return (
    <div style={divStyle}>
    {characters.map(character => <CharacterPreview  key={character.id} {...character}/>)}
    </div>
    );
  }
}
