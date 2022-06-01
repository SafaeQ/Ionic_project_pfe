import React from 'react';
import { IonButton, IonCardTitle, IonToolbar, IonTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, } from '@ionic/react';


function LoginAsso() {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Association Login </IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Login</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonContent>

        <IonFooter>

        </IonFooter>
    </IonPage>
  );
}

export default LoginAsso;
