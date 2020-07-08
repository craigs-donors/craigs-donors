import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, logoFacebook, logoTwitter, logoInstagram} from 'ionicons/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import Amplify, { Auth } from 'aws-amplify';
import './Home.css';
import TrendingContainer from '../components/TrendingContainer';
import PopularCausesContainer from '../components/PopularCausesContainer';
import FooterContainer from '../components/FooterContainer';



const federated = {
  facebookAppId: '3278049522251731',
  googleClientId: '813375056799-dtd6kq4lkpu5bl9eg3l8jjb9lhafdac5.apps.googleusercontent.com',
  amazonClientId: '2p0l7o2lcnst4g39v9ktomaafp'
};


const Home: React.FC = () => {
  return (
    <IonPage>
     <IonHeader translucent={true}>
        <IonToolbar class="toolbar-top">
        <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="90" height="55" float-left src="./assets/images/craigsdonors_logo.png"/></IonTitle>
          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear">About Us</IonButton>
            <IonButton color="secondary" expand="block" fill="clear">Community</IonButton>
            <IonButton color="tertiary" expand="block" fill="clear">Support</IonButton>
          </IonButtons>

          <IonButtons slot="primary">
            <IonButton color="secondary" fill="outline" expand="block">
            <IonIcon slot="start" icon={personCircle} />
              Login
            </IonButton>
            <IonButton color="tertiary" fill="solid">
            <IonIcon slot="start" icon={create} />
              Register
            </IonButton>                        
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>   
        <IonGrid>
        <IonRow class="row-style">
          {/* <IonCol>
            <IonList lines="none" class="btn-container">
              <IonItem>
                <IonButton class="btnsignup" color="danger" onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})}>Continue with Google</IonButton>            
              </IonItem>

              <IonItem>
                <IonButton class="btnsignup" color="success" onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook})}>Continue with Facebook</IonButton>
              </IonItem>                              
            </IonList>
          </IonCol> */}
          <IonCol>
            
          <AmplifyAuthenticator federated={federated}>
              <div>
                You are signed in!
                <AmplifySignOut />
              </div>
          </AmplifyAuthenticator>

          <IonItem class="btn-charity-login">
                <IonButton fill="clear" color="dark">Charity? Log in here</IonButton>
          </IonItem>            
          </IonCol>
        </IonRow>
   
          </IonGrid>                     

        {/* NB: Trending Items here */}
        <TrendingContainer/>

        {/* Social Buttons Below */}
        <IonGrid>
        <IonRow>
          <IonCol size="4">
            <IonButton size="large" fill="clear" color="tertiary">
              <IonIcon slot="start" icon={logoFacebook} />
            </IonButton>
          </IonCol>
          <IonCol size="4">
            <IonButton size="large" fill="clear" color="primary">
              <IonIcon slot="start" icon={logoTwitter} />
            </IonButton>
          </IonCol>
          <IonCol size="4">
            <IonButton size="large" fill="clear" color="warning">
              <IonIcon slot="start" icon={logoInstagram} />
            </IonButton>
          </IonCol>
        </IonRow>     
        </IonGrid>

        {/* NB: Popular Causes Container here */} 
        <PopularCausesContainer/>

        


      </IonContent>

      {/* NB: Footer container here */}
      <FooterContainer/>            
      
    </IonPage>
  );
};

export default Home;
