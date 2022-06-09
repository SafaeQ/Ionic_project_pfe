import React from 'react';
import { IonButton, IonToolbar, IonTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonItem, IonLabel, IonInput, } from '@ionic/react';
import { Action } from '../utils/Action';
import { Wave } from '../utils/Wave';

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
                        <IonTitle size="large">Association Login</IonTitle>  
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonRow className="ion-padding">
                    <IonCol >
                        <IonItem>
                            <IonLabel position='floating'> Your Email</IonLabel>
                            <IonInput type='email'></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                    <IonCol>
                        <IonItem>
                            <IonLabel position='floating'> Your Password</IonLabel>
                            <IonInput type='password'></IonInput>
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
            <IonGrid className='ion-no-margin ion-no-padding'>
                    <Action message="If you don't have an account please" text="Sign up" link="/signup" />
                    <Action message="Donor" text="Login Donor" link="/login-donor" />
                    <Wave/>
            </IonGrid>
        </IonFooter>
    </IonPage>
  );
}

export default LoginAsso;


