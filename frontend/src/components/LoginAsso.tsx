import React from 'react';
import { IonButton, IonCardTitle, IonToolbar, IonTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonItem, IonLabel, IonInput, } from '@ionic/react';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


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
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position='floating'> Your Email</IonLabel>
                            <IonInput></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position='floating'> Your Password</IonLabel>
                            <IonInput></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>

        <IonFooter>

        </IonFooter>
    </IonPage>
  );
}

export default LoginAsso;


