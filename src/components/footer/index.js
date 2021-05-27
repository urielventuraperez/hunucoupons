import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useLocation } from "react-router-dom";

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

function Copyright() {
  return (
    <div>
    <Typography variant="body1" align="center">
      {" Copyright © "}
      Cuponesh {new Date().getFullYear()}
    </Typography>
    <Typography variant="subtitle2" align="center">
      <Link href="#" color="inherit">
        Aviso de privacidad
      </Link>
    </Typography>
    </div>
  );
}

const Footer = () => {
  const classes = useStyles();

  let location = useLocation();

  return (
    <React.Fragment>
      {(location.pathname !== "/profile" && location.pathname !== '/login') && (
        <Container maxWidth="md" className={classes.footer}>
          {/*<Grid container spacing={4} justify="space-evenly">
            {DATAFOOTER.map(footer => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item, i) => (
                    <li key={i}>
                      <Link href="#" variant="body2" color="textPrimary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid> */}
          <Box mt={3}>
            <Copyright />
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Footer;
