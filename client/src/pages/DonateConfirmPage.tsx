import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, notifications } from 'ionicons/icons';

import React from 'react';
import ReactDOM from 'react-dom';


import './DonateConfirmPage.css';
import FooterContainer from '../components/FooterContainer';

const DonateConfirmPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar-top">
        <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="120" height="55" float-left src="./assets/images/craigsdonors_logo.png"/></IonTitle>

          <IonButtons slot="secondary">
          <IonButton color="primary" expand="block" fill="clear" routerLink="/donatepage">Donate</IonButton>
          <IonButton color="secondary" expand="block" fill="clear" routerLink="/trendingpage">Community</IonButton>
            <IonButton color="tertiary" expand="block" fill="clear" routerLink="/aboutpage">About Us</IonButton>
          </IonButtons>

          <IonButtons slot="primary">
            <IonButton fill="clear">
            <IonIcon slot="start" icon={notifications} />
            </IonButton>
            <IonButton size="large" fill="solid" color="tertiary">
              James Cook
            </IonButton>                        
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>                                
          <IonGrid class="display-grid">
            <IonRow class="row-style">
              <IonCol class="col-style"><div>Donate to Homeless Entrepreneur</div></IonCol>
            </IonRow>
            <IonRow class="row-style">
              <IonCol></IonCol>
              <IonCol></IonCol>              
            </IonRow>
            <IonRow class="row-style">              
              <IonCol class="col-style" size="4" offset="4" ><IonText>Payment successful.<br/>Thanks for supporting! </IonText></IonCol>              
            </IonRow>
            <IonRow class="row-style">              
              <IonCol class="col-style" size="4" offset="4" ><IonText>Join community to support <br/> Homeless Entrepreneur </IonText></IonCol>              
            </IonRow>           
            <IonRow class="row-style">              
              <IonCol class="col-style" size="4" offset="4" ><IonButton size="large" color="warning" routerLink="/trendingpage">Join Community</IonButton></IonCol>              
            </IonRow>                        
            <IonRow class="row-style">              
              <IonCol class="col-style" size="4" offset="4" ><IonButton size="large" color="primary" fill="clear" routerLink="/home">Return to Home Page</IonButton></IonCol>              
            </IonRow>                                 
          </IonGrid>

      </IonContent>
      
      {/* Footer container here */}
      <FooterContainer/>      

    </IonPage>
  );
};

export default DonateConfirmPage;