import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonListHeader } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp} from 'ionicons/icons';
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

const SignInContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid>
    <IonRow>
      <IonCol size="8" offset="4" className="ion-align-self-center">
  
      {/* NB: Amplify Authenticator code   */}
      <AmplifyAuthenticator federated={federated}>
          <div>                                              
            <AmplifySignOut />
          </div>
      </AmplifyAuthenticator>
  
      </IonCol>
    </IonRow>
      </IonGrid>

  );
};

export default SignInContainer;













