import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonListHeader } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText, IonTextarea } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp} from 'ionicons/icons';

import ReactDOM from 'react-dom';


import './CreateCommunityContainer.css';

interface ContainerProps { }

const CreateCommunityContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol class="col-style" size="8" offset="3">
        <IonItem class="search-input">
          <IonInput type="text" placeholder="Page title" clear-input="true" required></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol class="col-style" size="8" offset="3">
        <IonItem class="search-input">
          <IonInput placeholder="#Cause" clear-input="true" required></IonInput>
        </IonItem>
        </IonCol>
      </IonRow>      

      <IonRow>
        <IonCol class="col-style" size="8" offset="3">
        <IonItem class="search-input">
          <IonTextarea placeholder="Descriptionz" clear-input="true" required></IonTextarea>
        </IonItem>
        </IonCol>
      </IonRow>

      <br/ >
      <IonRow>
        <IonCol class="col-style" size="8" offset="3">          
          <IonButton color="warning" size="large">Create</IonButton>
        </IonCol>                   
      </IonRow>

    </IonGrid>    

  );
};

export default CreateCommunityContainer;
