import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, shapesOutline } from 'ionicons/icons';
import React from 'react';

function ContactUs() {
  return (
    <>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton icon={ arrowBack } text="" className="custom-back" />
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton className="custom-button">
                        <IonIcon icon={ shapesOutline } />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle>Contact Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonRow className="ion-margin ion-padding">
                    <IonCol style={{ display:'flex', flexWrap:'wrap', justifyContent: 'space-between'}}>
                        <IonCardContent>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium quo eum necessitatibus eveniet enim labore, error, natus tempore aperiam expedita repellat consequatur sed dolore voluptates temporibus, eligendi quae nostrum.
                            </p>
                        </IonCardContent>
                        <IonCard >
                            <IonCardHeader>
                                <IonButton className="custom-button">
                                    <IonIcon name="call-outline"/>
                                </IonButton>
                                <IonCardTitle>
                                    <h1 style={{ fontSize: 'medium'}}>Call us</h1>
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                        <IonCard >
                            <IonCardHeader>
                                <IonButton className="custom-button">
                                    <IonIcon name="logo-instagram"/>
                                </IonButton>
                                <IonCardTitle>
                                    <h1 style={{ fontSize: 'medium'}}>Insta</h1>
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                        <IonCard >
                            <IonCardHeader>
                                <IonButton className="custom-button">
                                    <IonIcon name="logo-twitter"/>
                                </IonButton>
                                <IonCardTitle>
                                    <h1 style={{ fontSize: 'medium'}}>Twitter</h1>
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                        <IonCard >
                            <IonCardHeader>
                                <IonButton className="custom-button">
                                    <IonIcon name="mail-outline"/>
                                </IonButton>
                                <IonCardTitle>
                                    <h1 style={{ fontSize: 'medium'}}>Call us</h1>
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
</>
  );
}

export default ContactUs;
