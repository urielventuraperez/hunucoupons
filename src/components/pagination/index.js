import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center'
    },
  },
}));

const CouponsPagination = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination onChange={props.handleChange} count={props.pages} color="secondary" />
    </div>
  );
}

export default CouponsPagination;