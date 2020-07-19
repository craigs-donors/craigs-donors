import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, notifications } from 'ionicons/icons';

import React from 'react';
import ReactDOM from 'react-dom';


import './AboutPage.css';
import FooterContainer from '../components/FooterContainer';

const AboutPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar-top">
          <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="120" height="55" float-left src="./assets/images/craigsdonors_logo.png"/></IonTitle>

          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear" routerLink="/home">Home</IonButton>
            <IonButton color="secondary" expand="block" fill="clear" routerLink="/trendingpage">Community</IonButton>
          </IonButtons>

          <IonButtons slot="primary">
            <IonButton fill="clear">
            <IonIcon slot="start" icon={notifications} />
            </IonButton>
            <IonButton size="large" fill="solid" color="tertiary">
              Sign out
            </IonButton>                        
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>                                
          <IonGrid class="display-grid">
            <IonRow class="row-style">
              <IonCol class="col-style"><h1>Meet the team</h1></IonCol>
            </IonRow>
            <IonRow class="row-style">
              <IonCol></IonCol>
              <img alt="logo" id="header_logo" width="350" height="350" float-left src="./assets/images/AboutPageImg.png"/>             
              <IonCol></IonCol>              
            </IonRow>
            <IonRow class="row-style">
              <h1>The Craigs Donor platform is developed by a team of passionate developers gathered in Amazon Raise-up Buildathon. 
              We aim to provide a platform for donors to connect resources and tools to empower the charities to learn about their 
              target audience and build effective fundraising campaigns.
              </h1>              
            </IonRow>                      

            <IonRow>
            <IonCol size ="8" offset="2">
            <IonCard class="card-style">
            <IonCardContent>
            <IonCardTitle>
                Mohit Gadkari
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">Craigs Donor</IonCol>
                  <IonCol size="4">AWS Solution Architect</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Send Message</IonButton>
                </IonCol>                        
            </IonRow>
            </IonCardContent>
            </IonCard>                
            </IonCol>
            </IonRow>

            <IonRow>
            <IonCol size ="8" offset="2">
            <IonCard class="card-style">
            <IonCardContent>
            <IonCardTitle>
                Pradeep Khandelwal
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">Craigs Donor</IonCol>
                  <IonCol size="4">AWS Solution Architect</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Send Message</IonButton>
                </IonCol>                        
            </IonRow>
            </IonCardContent>
            </IonCard>                
            </IonCol>
            </IonRow>            

            <IonRow>
            <IonCol size ="8" offset="2">
            <IonCard class="card-style">
            <IonCardContent>
            <IonCardTitle>
                Ava Chan
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">Craigs Donor</IonCol>
                  <IonCol size="4">Project Assistant</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Send Message</IonButton>
                </IonCol>                        
            </IonRow>
            </IonCardContent>
            </IonCard>                
            </IonCol>
            </IonRow>

            <IonRow>
            <IonCol size ="8" offset="2">
            <IonCard class="card-style">
            <IonCardContent>
            <IonCardTitle>
                Yattish Ramhorry
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">Craigs Donor</IonCol>
                  <IonCol size="4">Full Stack Developer</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Send Message</IonButton>
                </IonCol>                        
            </IonRow>
            </IonCardContent>
            </IonCard>                
            </IonCol>
            </IonRow>   

            <IonRow>
            <IonCol size ="8" offset="2">
            <IonCard class="card-style">
            <IonCardContent>
            <IonCardTitle>
                Deepak Shah
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">Craigs Donor</IonCol>
                  <IonCol size="4">Full Stack Developer</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Send Message</IonButton>
                </IonCol>                        
            </IonRow>
            </IonCardContent>
            </IonCard>                
            </IonCol>
            </IonRow>                     

            <IonRow>
            <IonCol size ="8" offset="2">
            <IonCard class="card-style">
            <IonCardContent>
            <IonCardTitle>
                Michael Roffo
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">Craigs Donor</IonCol>
                  <IonCol size="4">Full Stack Developer</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Send Message</IonButton>
                </IonCol>                        
            </IonRow>
            </IonCardContent>
            </IonCard>                
            </IonCol>
            </IonRow>


          </IonGrid>



      </IonContent>
      
      {/* Footer container here */}
      <FooterContainer/>      

    </IonPage>
  );
};

export default AboutPage;