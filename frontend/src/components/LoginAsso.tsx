import React from 'react';
import { IonButton, IonCardTitle, IonToolbar, IonTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonItem, IonLabel, IonInput, IonText, } from '@ionic/react';
import { Action } from './utils/Action';
import { Wave } from './utils/Wave';

function LoginAsso() {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Association Login </IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense" >
                <IonToolbar>
                        <IonTitle size="large">Login</IonTitle>  
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonRow className="ion-padding">
                    <IonCol >
                        <IonItem>
                            <IonLabel position='floating'> Your Email</IonLabel>
                            <IonInput></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                    <IonCol>
                        <IonItem>
                            <IonLabel position='floating'> Your Password</IonLabel>
                            <IonInput></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="justify-content-md-center">
                    <IonCol size="12" className="col-md-12 text-center">
                        <IonButton color='danger' type='submit'> Login </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>

        <IonFooter>
            <IonGrid>
                <IonRow className="justify-content-md-center">
                    <IonCol size="12" className="col-md-12 text-center">
                        <Action message="If you don't have an account please" text="Sign up" link="/signup" />
                        <Wave/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonFooter>
    </IonPage>
  );
}

export default LoginAsso;


