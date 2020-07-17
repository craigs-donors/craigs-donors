import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonListHeader, IonItemDivider } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp} from 'ionicons/icons';

import ReactDOM from 'react-dom';


import './TrendingContainer.css';

interface ContainerProps { }

const TrendingContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid class="display-grid">
    <IonRow class="row-style">
        <IonCol class="col-style"><IonText color="warning">What's</IonText> <IonText color="tertiary"> Trending</IonText></IonCol>
    </IonRow>

    <IonRow>
    <IonCol size ="8" offset="2">
      <IonCard class="card-style">
        <IonCardContent>
            <IonCardTitle>
                How can we do most good with limited resources?
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">#EffectiveAltruism</IonCol>
                  <IonCol size="4">57 Replies</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Join Discussion</IonButton>
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
              Join me to fight COVID-19 in third world!!!
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">#COVID-19</IonCol>
                  <IonCol size="4">76 Replies</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Join Discussion</IonButton>
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
            New Renewable Energy Project starting...Join Us!
            </IonCardTitle>
            <IonRow>
                <IonCol size="4">#SAVEOURPLANET</IonCol>
                  <IonCol size="4">977 Replies</IonCol>
                  <IonCol size="4">
                    <IonButton color="tertiary" size="small">Join Discussion</IonButton>
                </IonCol>                        
            </IonRow>
        </IonCardContent>
      </IonCard>                
    </IonCol>
    </IonRow>    

    </IonGrid>    

  );
};

export default TrendingContainer;