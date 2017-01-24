import React from "react";
import CharacterPreview from "./CharacterPreview"
import characters from "../../data/characters"

export default class IndexPage extends React.Component{
  render() {
    {characters.map(character => console.log(character))}


    return (
    <div>
    {characters.map(character => <CharacterPreview  key={character.id} {...character}/>)}
    </div>
    );
  }
}
