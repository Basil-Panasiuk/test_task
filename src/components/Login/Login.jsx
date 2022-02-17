/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-console */
import React from 'react';
import GoogleLogin from 'react-google-login';

// eslint-disable-next-line react/prop-types
const Login = ({ setUser, setIsAuth }) => {
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    setIsAuth(true);
    setUser(response.profileObj);
  };

  return (
    <div>
      <GoogleLogin
        clientId="822156599761-k7i7kqoo3nabrsuivnrimet796selep3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Login;
