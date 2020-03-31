import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  chip:{
    marginTop: '2.5rem',
  }
}));

const ChipLegend = () => {

  const classes = useStyles();

  return(
    <Chip
    className={classes.chip}
    color={'primary'}
    avatar={<Avatar>16</Avatar>}
    label="Cupones"
    variant="outlined"
  />
  )

}

export default ChipLegend;