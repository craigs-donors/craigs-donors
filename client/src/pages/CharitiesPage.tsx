import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './CharitiesPage.css';
import CharityPanelContainer from '../components/CharityPanelContainer';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
    IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonThumbnail } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import FooterContainer from '../components/FooterContainer';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, notifications, logoAmazon } from 'ionicons/icons';
interface CharitiesPageProps {

};

const CharitiesPage: React.FC<CharitiesPageProps> = props => {
    const orgIDs = [
        6026,
        6616,
        7713,
        7716,
        7770,
        8982,
        12100,
        12270,
        14732,
        17460,
        17765
    ]
    return (
        <Fragment>
            <ul>
            {orgIDs.map((elem,index) => 
                <li key={index}>
                <CharityPanelContainer orgID={elem}></CharityPanelContainer>
                </li>
            )}
             <IonPage>
                <IonHeader>
                  <IonToolbar class="toolbar-top">
                    <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="120" height="55" float-left src="./assets/images/craigsdonors_logo.png"/></IonTitle>

                    <IonButtons slot="secondary">
                      <IonButton color="primary" expand="block" fill="clear" routerLink="/home">Home</IonButton>
                      <IonButton color="dark" expand="block" fill="clear" routerLink="/donatepage">Donate</IonButton>                      
                      <IonButton color="danger" expand="block" fill="clear" href="./assets/external/DashboardPage.html" target="_blank">Dashboard</IonButton>
                      <IonButton color="secondary" expand="block" fill="clear" routerLink="/trendingpage">Community</IonButton>
                      <IonButton color="tertiary" expand="block" fill="clear">About Us</IonButton>
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
                        <IonCol class="col-style"><div>Welcome to Craig's Donor - The Homeless Entrepreneur</div></IonCol>
                      </IonRow>
                      <IonRow class="row-style">
                        <IonCol></IonCol>
                        <IonImg class="img-charity" src="https://images.squarespace-cdn.com/content/5a0b0d34d7bdce6238e25913/1550338990561-KG0FK6GR295UGZEHEM7A/logo_he_negativo_v1.png?content-type=image%2Fpng" />
                        <IonCol></IonCol>              
                      </IonRow>
                      <IonRow class="row-style">
                        <h1>Homeless Entrepreneur’s mission is to promote economic empowerment and poverty reduction via work and 
                          active citizenship, so people living in social exclusion can improve their quality of life. We believe every citizen 
                          has the opportunity to participate regardless of age, gender, sexual preference, political alliance, or religious 
                          belief. We invite everyone to join us in our mission. 
                        </h1>              
                      </IonRow>      
                      <IonRow class="row-style">              
                        <IonCol class="col-style" size="4" offset="4" >
                          <IonButton size="large" color="warning" routerLink="/donatepage">
                          <IonIcon slot="start" icon={logoAmazon} />Donate with Amazon Pay
                          </IonButton>
                        </IonCol>
                      </IonRow>                                                              
                    </IonGrid>

                </IonContent>

                {/* Footer container here */}
                <FooterContainer/>      

              </IonPage>
            </ul>
        </Fragment>
    );
}

export default CharitiesPage;
