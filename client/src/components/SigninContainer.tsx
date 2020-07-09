import React from 'react';

import { IonGrid, IonRow, IonCol, IonButton, IonToolbar, IonHeader, IonTitle, IonButtons, IonIcon} from '@ionic/react';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import TrendingContainer from './TrendingContainer';
Amplify.configure(awsconfig);

interface ContainerProps { }

const federated = {
  facebookAppId: '3278049522251731',
  googleClientId: '813375056799-dtd6kq4lkpu5bl9eg3l8jjb9lhafdac5.apps.googleusercontent.com',
  amazonClientId: '2p0l7o2lcnst4g39v9ktomaafp'
};
interface Props {

}
interface State {
  isOpen: boolean,
  userName: string
}

export default class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userName: ""

    };
  }
async getState() {
  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log(user.username);
    this.setState({ userName: user.username });
  } catch(e) {
    console.error(e)
    console.log("no user")
    this.setState({ userName: "No User" });
  }
};
componentDidMount() {
  this.getState();
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
signOut = () => {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

render(){
  return(
    <IonGrid>
      {/* NB: Amplify Authenticator code   */}
      <IonGrid>
        <IonRow>
          <IonCol size="8" offset="4" className="ion-align-self-center">
          {/* NB: Amplify Authenticator code   */}
          <AmplifyAuthenticator federated={federated} usernameAlias="email">

    </AmplifyAuthenticator>
          </IonCol>
        </IonRow>
        </IonGrid> 
      </IonGrid>
  )
}
}











