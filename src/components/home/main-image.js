import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SisalImage from '../../assets/images/sisal.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,
        padding: 0
    },
    rootSearch: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    box: {
        height: '85vh',
        margin: 0,
        padding: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        backgroundImage: `url(${SisalImage})`,
        backgroundSize: 'cover',
    },
    absolute: {
        position: 'absolute',
        height: '70vh',
        top: 0,
        left: 0
    },
    text: {
    },
}));

const FirstSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container
                direction="column"
                justify="center"
                alignItems="center" className={classes.box}>
                <Typography className={classes.text} variant="h1" component="h2">
                    TITLE
                </Typography>
            </Grid>
        </div>
    )
}

export default FirstSection