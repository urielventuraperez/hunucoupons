import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { DATAFOOTER, SOCIALMEDIA } from "../../utils/dataFooter";

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(6),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

function Social() {
  return (
    <Box align="center">
      <IconButton href={SOCIALMEDIA.facebook}>
        <FacebookIcon />
      </IconButton>
      <IconButton href={SOCIALMEDIA.twitter}>
        <TwitterIcon />
      </IconButton>
      <IconButton href={SOCIALMEDIA.instagram}>
        <InstagramIcon />
      </IconButton>
    </Box>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {" Copyright © "}
      <Link color="inherit" href="#">
        Hunucoupons
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {DATAFOOTER.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item, i) => (
                  <li key={i}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={3}>
          <Social />
        </Box>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
