import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, notifications } from 'ionicons/icons';

import React from 'react';
import ReactDOM from 'react-dom';


import './CharitiesPage.css';
import FooterContainer from '../components/FooterContainer';

const CharitiesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar-top">
          <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="120" height="55" float-left src="./assets/images/craigsdonors_logo.png"/></IonTitle>

          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear" routerLink="/home">Home</IonButton>
            <IonButton color="secondary" expand="block" fill="clear" routerLink="/trendingpage">Community</IonButton>
            <IonButton color="tertiary" expand="block" fill="clear">About Us</IonButton>
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
              <IonCol class="col-style"><div>Welcome to Craig's Donor (Charity Name)</div></IonCol>
            </IonRow>
            <IonRow class="row-style">
              <IonCol></IonCol>
              <IonImg class="img-charity" src="./assets/images/craigsdonors_logo.png" />
              <IonCol></IonCol>              
            </IonRow>
            <IonRow class="row-style">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime soluta ut porro doloremque quo quisquam 
                ratione nesciunt, quis, dicta quod incidunt exercitationem eveniet recusandae amet laboriosam nisi in architecto 
                excepturi ea perferendis natus iste tempora. Ex repellendus cupiditate excepturi dolor natus necessitatibus minima 
                cumque corrupti quas, ea magnam accusantium pariatur voluptates praesentium deleniti odit dolorem. Sunt nulla excepturi 
                voluptatum doloremque suscipit officia fugiat modi, expedita perferendis optio assumenda facilis. Veritatis maxime 
                error fuga voluptatibus, vitae qui provident eaque magni. Illum, sit! Ad expedita, qui quaerat eveniet illum nulla 
                quisquam quo magnam quam unde ipsam eius iure amet ipsa repudiandae fuga! Itaque vel deleniti quibusdam saepe rerum 
                expedita dolores incidunt voluptatibus, nisi nam hic vitae, quidem sunt ea, amet magni sint eveniet ex est omnis beatae. 
                Doloribus sapiente similique, ullam veniam voluptatem suscipit tempora a nobis quibusdam sit, animi aut nihil illo unde 
                odio fuga libero vitae et sunt veritatis qui enim ipsam! Ad illum esse qui aspernatur quasi, doloribus modi. Alias 
                delectus cumque facilis temporibus cupiditate similique numquam excepturi laborum quasi nesciunt adipisci, beatae ad. 
                Voluptas eligendi temporibus recusandae praesentium, possimus ratione vero perferendis. Voluptate, dolorem. Praesentium 
                totam laudantium quibusdam ducimus tempore voluptate soluta repellendus at ipsam, beatae sequi.
              </h1>              
            </IonRow>                      
          </IonGrid>

      </IonContent>
      
      {/* Footer container here */}
      <FooterContainer/>      

    </IonPage>
  );
};

export default CharitiesPage;