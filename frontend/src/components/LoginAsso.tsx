import React from 'react';
import { IonButton, IonCardTitle, IonToolbar, IonTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonItem, IonLabel, IonInput, } from '@ionic/react';




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
                    <div className='center'>
                        <IonTitle size="large">Login</IonTitle>  
                    </div>
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


