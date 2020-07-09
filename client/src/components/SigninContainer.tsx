import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonListHeader } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp} from 'ionicons/icons';

interface ContainerProps { }

const SignInContainer: React.FC<ContainerProps> = () => {
  return (
    <IonFooter>
    <IonToolbar class="page-footer">      
      <IonRow>
        <IonCol>
          <IonButton color="light" expand="block" fill="clear">Privacy</IonButton>
        </IonCol>
        <IonCol>
          <IonButton color="light" expand="block" fill="clear">Sitemap</IonButton>
        </IonCol>
        <IonCol>
          <IonButton color="light" expand="block" fill="clear">Terms</IonButton>
        </IonCol>
        <IonCol>
          <IonButton color="light" expand="block" fill="clear">Help</IonButton>
        </IonCol>                              
      </IonRow>
    </IonToolbar>
  </IonFooter>

  );
};

export default SignInContainer;













