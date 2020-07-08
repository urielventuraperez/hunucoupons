import React, { useEffect } from "react";
import { ACCESS_TOKEN, DARK_MODE } from "../../environments";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../redux/actions/auth";
import { getUserProfile } from "../../redux/actions/user";
import { connect } from "react-redux";

const OAuth2Redirect = (props) => {
  const getUrlParameter = name => {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const { isLogged, getUserProfile } = props;



  useEffect(()=>{
    loginUser();
  },[isLogged]);
  
  useEffect(() => {
    const accessToken = getUrlParameter("token");
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(DARK_MODE, false);
    }
  }, [isLogged]);

  useEffect(()=>{
    getUserProfile()
  },[getUserProfile])
  
  return (
    <div>
      {props.isLogged && (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = ( state ) => {
  return {
    isLogged: state.auth.hasToken
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    loginUser: dispatch({ type: 'SET_TOKEN' }),
    getUserProfile: () => {
      dispatch(getUserProfile())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OAuth2Redirect);
