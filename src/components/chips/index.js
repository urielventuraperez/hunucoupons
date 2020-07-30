import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  chip:{
    marginTop: '2.5rem',
  }
}));

const ChipLegend = (props) => {
  const classes = useStyles();
  
  const labelCoupons = (coupons) => {
    switch (coupons) {
      case 0:
      return 'Sin ningún comercio';
      case 1:
      return 'Comercio'
      default:
        return 'Comercios';
    }
  }

  return(
    <Chip
    className={classes.chip}
    color={'primary'}
    avatar={<Avatar>{props.totalCoupons}</Avatar>}
    label={labelCoupons(props.totalCoupons)}
    variant="outlined"
  />
  )

}

export default ChipLegend;