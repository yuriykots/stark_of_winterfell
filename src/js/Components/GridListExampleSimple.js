import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '/img/bran-stark.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: '/img/bran-stark.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '/img/bran-stark.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '/img/bran-stark.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: '/img/bran-stark.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '/img/bran-stark.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '/img/bran-stark.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '/img/bran-stark.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
