import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack, shapesOutline } from 'ionicons/icons';
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
                <IonTitle>About Us</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonCard>
              <img src='https://media.istockphoto.com/photos/alphabet-letter-wooden-blocks-with-words-give-in-child-and-parents-picture-id1199796265?k=20&m=1199796265&s=612x612&w=0&h=TeJYJu3rVe-5TChThhVc6xslFuZyqPseb4LDvsH1OuU='/>
                <IonCardHeader>
                  <IonCardTitle>
                    <h1 style={{ fontSize: 'medium'}}>About Us</h1>
                  </IonCardTitle>
                </IonCardHeader>     
                <IonCardContent>
                    <p> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere aperiam voluptate atque quae? Explicabo iste tempore inventore error 
                      totam nesciunt iure quas? Vel repudiandae itaque, qui sapiente quis accusantium laudantium?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere aperiam voluptate atque quae? Explicabo iste tempore inventore error 
                      totam nesciunt iure quas? Vel repudiandae itaque, qui sapiente quis accusantium laudantium?
                    </p>
                </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
    </>
  );
}

export default AboutUs;
