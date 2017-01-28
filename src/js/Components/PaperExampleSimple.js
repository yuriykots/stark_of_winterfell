import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 200,
  width: 200,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
  </div>
);

export default PaperExampleSimple;
