import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        marginBottom: '130px',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

const NewCoupons = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container} maxWidth="lg">
                <Typography gutterBottom variant="h5" component="h2">
                    New Coupons
                                    </Typography>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh36g18gCmL9F61Suhn5aJuXmnhAmIu2wvCm001qB24b1AqRkm&s"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
        </Button>
                                <Button size="small" color="primary">
                                    Learn More
        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://img.grouponcdn.com/coupons/gMH7PGJwA4KdS3teZNvpXD/nike-highres-500x500"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
        </Button>
                                <Button size="small" color="primary">
                                    Learn More
        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://target.scene7.com/is/image/Target/GUEST_5561e25a-a986-4b57-bba4-ee339796ae89?wid=488&hei=488&fmt=pjpeg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
        </Button>
                                <Button size="small" color="primary">
                                    Learn More
        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" className={classes.button}>
                    MORE
      </Button>
            </Container>
        </div>
    );
}
export default NewCoupons;