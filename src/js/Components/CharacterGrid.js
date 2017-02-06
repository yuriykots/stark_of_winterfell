import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from "react-router";
import characters from "../../data/characters"

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    "margin-top": "3%",
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
     "text-align": "center",
     "font-family": "Roboto",
   },
};

/**
cellHeight={400}
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

export default class CharacterGrid extends React.Component{
  render() {
    {characters.map(character => console.log(character))}
    return (
  <div style={styles.root}>
    <GridList style={styles.gridList}  cellHeight={400} cols={2.5} padding={20}>
      {characters.map((character) => (
        <Link to={`/character/` + character.id}>
        <GridTile
          key={character.author}
          title={character.name}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 100%,rgba(0,0,0,0) 100%)"
        >
          <img src={character.image} />
        </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
  );
  }
}
