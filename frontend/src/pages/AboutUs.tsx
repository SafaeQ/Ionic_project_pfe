import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React from 'react';

function AboutUs() {
  return (
    <>
        <IonPage>
          <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                  <IonBackButton icon={ arrowBack } text="" className="custom-back" />
                </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle>About Us</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonCard>
              <img src='../images/téléchargement.webp'/>
                <IonCardHeader>
                  <IonCardTitle>
                    <h1>About Us</h1>
                  </IonCardTitle>
                </IonCardHeader>     
                <IonCardContent>
                    <p> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                    </p>
                </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
    </>
  );
}

export default AboutUs;
