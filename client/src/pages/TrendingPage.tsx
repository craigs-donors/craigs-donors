import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonThumbnail } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './TrendingPage.css';
import TrendingContainer from '../components/TrendingContainer';
import FooterContainer from '../components/FooterContainer';
import CreateCommunityContainer from '../components/CreateCommunityContainer';
import SignInContainer from '../components/SigninContainer';

const TrendingPage: React.FC = () => {
  return (
    
    <IonPage>

      
      <IonContent>                                
        {/* NB: Trending Items here */}
        <SignInContainer/>
        <TrendingContainer/>
        

        <IonGrid>
          <IonRow class="row-style">
            <IonCol class="col-style"><IonText color="warning">Join</IonText> <IonText color="tertiary">Community</IonText></IonCol>
          </IonRow>

          <IonRow>
            <IonCol class="col-style" size="8" offset="3">
            <IonItem class="search-input">
              <IonInput type="text" placeholder="Search" clear-input="true" required></IonInput>
                <IonButton color="success" size="large">Go</IonButton>              
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-start">
            <IonCol size ="4" className="ion-align-self-start">
              <div className="ion-text-center ion-padding">            
                  <img src="./assets/images/CoV-2.png" width="150" height="160"/>   
                  COVID-19
                  <IonButton color="warning">Join</IonButton>
              </div>
            </IonCol>
            <IonCol size ="4" className="ion-align-self-start">
            <div className="ion-text-center ion-padding">
                  <img src="./assets/images/PngItem_424709.png" width="150" height="160" /> 
                  EffectiveAltruism
                  <IonButton color="warning">Join</IonButton>
              </div>
            </IonCol>
            <IonCol size ="4" className="ion-align-self-start">
            <div className="ion-text-center ion-padding">
                  <img src="./assets/images/PngItem_923687.png" width="150" height="160" />
                  Sustainability
                  <IonButton color="warning">Join</IonButton>
              </div>
            </IonCol>
          </IonRow>

          <IonRow class="row-style">
            <IonCol class="col-style"> <IonButton color="warning">See more</IonButton></IonCol>
          </IonRow>

          <IonRow class="row-style">
            <IonCol class="col-style"><IonText color="warning">Can't find your community?!</IonText> <IonText color="tertiary">Create your own!</IonText></IonCol>
          </IonRow>

        </IonGrid>  
             

        {/* NB: Create commmunity container here */}
        <CreateCommunityContainer />
      </IonContent>
      
      {/* NB: Footer container here */}
      <FooterContainer/>      

    </IonPage>
  );
};

export default TrendingPage;