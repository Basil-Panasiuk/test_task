/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// eslint-disable-next-line react/prop-types
const Login = ({ setUser, setIsAuth, isAuth }) => {
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push('/profile');
    }
  }, [isAuth]);

  const authSuccess = (response) => {
    setIsAuth(true);
    setUser(response.profileObj);
  };

  const authFailed = (response) => {
    console.log('Something wrong');
    setIsAuth(false);
  };

  return (
    <div>
      <GoogleLogin
        clientId="822156599761-k7i7kqoo3nabrsuivnrimet796selep3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={authSuccess}
        onFailure={authFailed}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Login;
