import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from "react-router";

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

   },
};

const tilesData = [
  {
    img: '/img/eddard-stark.jpg',
    title: 'Eddard Stark',
    author: 'jill111',
  },
  {
    img: '/img/robb-stark.jpg',
    title: 'Rob Stark',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
cellHeight={400}
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const CharacterGrid = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList}  cellHeight={400} cols={3.5} padding={25}>
      {tilesData.map((tile) => (
        <Link to={`/character/eddard-stark`}>
        <GridTile
          key={tile.img}
          title={tile.title}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 100%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
);

export default CharacterGrid;
