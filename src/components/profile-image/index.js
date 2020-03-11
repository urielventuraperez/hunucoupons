import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { ACCESS_USER } from "../../environments";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 8,
    width: 50,
    height: 50
  }
}));

const ProfileImage = props => {
  const classes = useStyles();

  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setUser(
        localStorage.getItem(ACCESS_USER)
          ? JSON.parse(localStorage.getItem(ACCESS_USER))
          : {}
      );
    }, 700);
  }, []);

  return (
    <Link to="/profile">
      {props.isLogged ? (
        <div>
          <Avatar
            alt={user.nombre}
            src={user.imageURL}
            className={classes.bigAvatar}
          />
        </div>
      ) : (
        <div>
          <Avatar alt="Inicia sesión" className={classes.bigAvatar}>
            <AccountCircleIcon />
          </Avatar>
        </div>
      )}
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    isLogged: state.auth.hasToken
  };
};

export default connect(mapStateToProps, null)(ProfileImage);
