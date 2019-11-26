import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles ( theme => ({
  root: {
    flexGrow: 1,
  },
  container:{
      position: 'relative',
      bottom: '80px',
      background: theme.palette.text.secondary,
  },
  box:{
    height: '90vh',
    margin: 0,
    padding: 0,
  },
  paper: {
    padding: theme.spacing(2),
    height: '140px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SecondSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SecondSection