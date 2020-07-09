import React from 'react';

import { IonGrid, IonRow, IonCol, IonButton} from '@ionic/react';

import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
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
    <IonRow>
      <IonCol size="8" offset="4" className="ion-align-self-center">
  
      {/* NB: Amplify Authenticator code   */}
      <AmplifyAuthenticator federated={federated}>
          <div> 

          <IonButton color="warning" size="large" onClick={this.signOut}>Sign Out</IonButton>                                        
            {/* <AmplifySignOut />  */}
            {this.state.userName}
          </div>
      </AmplifyAuthenticator>
  
      </IonCol>
    </IonRow>
      </IonGrid>
  )
}
}











