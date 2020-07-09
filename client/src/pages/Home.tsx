import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonToast } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, logoFacebook, logoTwitter, logoInstagram} from 'ionicons/icons';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import Amplify, { Auth } from 'aws-amplify';
import './Home.css';
import TrendingContainer from '../components/TrendingContainer';
import PopularCausesContainer from '../components/PopularCausesContainer';
import FooterContainer from '../components/FooterContainer';
import SignInContainer from '../components/SigninContainer';






const Home: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);

  return (
    <IonPage>
     <IonHeader translucent={true}>
        <IonToolbar class="toolbar-top">
        <IonTitle size="small"><img alt="logo" id="header_logo" width="120" height="55" float-left src="./assets/images/craigsdonors_logo.png"/></IonTitle>
          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear" routerLink="/donatepage">Donate</IonButton>
            <IonButton color="secondary" expand="block" fill="clear" routerLink="/trendingpage">Community</IonButton>
            <IonButton color="tertiary" expand="block" fill="clear">About Us</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>   
        <IonGrid>
        <IonRow>
          <IonCol size="8" offset="4" className="ion-align-self-center">
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
