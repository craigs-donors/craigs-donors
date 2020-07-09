import React from 'react';

import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import SignInContainer from '../components/SigninContainer';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const federated = {
    facebookAppId: '3278049522251731',
    googleClientId: '813375056799-dtd6kq4lkpu5bl9eg3l8jjb9lhafdac5.apps.googleusercontent.com',
    amazonClientId: '2p0l7o2lcnst4g39v9ktomaafp'
  };

const SignIn = () => (
    <AmplifyAuthenticator federated={federated}>
    <div>                                
      You are signed in!               
      <AmplifySignOut />
    </div>
    </AmplifyAuthenticator>
);


export default SignIn;









