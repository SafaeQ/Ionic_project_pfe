import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent, IonTitle, IonGrid, IonRow, IonCol, IonCardContent, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { arrowBack, shapesOutline } from 'ionicons/icons';

function Services() {
  return (
    <div>
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
                    <IonTitle>Our Services</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonCardContent>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium quo eum necessitatibus eveniet enim labore, error, natus tempore aperiam expedita repellat consequatur sed dolore voluptates temporibus, eligendi quae nostrum.
                  </p>
                </IonCardContent>
                <IonRow>
                    <IonCol style={{ display:'flex', flexWrap:'wrap', justifyContent: 'space-between'}}>
                        <IonCard >
                                <img src='https://www.signupgenius.com/cms/images/nonprofit/community-service-ideas.jpg'/>
                            <IonCardHeader>
                                <IonCardTitle>
                                    <h1 style={{ fontSize: 'medium'}}>Lorem ipsum</h1>
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                        <IonCard >
                          <img src='https://the1thing.com/wp-content/uploads/2014/11/community_service.jpg'/>
                            <IonCardHeader>
                                <IonCardTitle>
                                    <h1 style={{ fontSize: 'medium'}}>Lorem ipsum</h1>
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                        <IonCard >
                          <img src='http://www.themanthanschool.co.in/blog/wp-content/uploads/2020/05/community-service.jpg'/>
                            <IonCardHeader>
                                <IonCardTitle>
                                    <h1 style={{ fontSize: 'medium'}}>Lorem ipsum</h1>
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                        <IonCard >
                          <img src='https://insidearabia.com/wp-content/uploads/2020/05/IMG_2393-1280x640.jpg'/>
                            <IonCardHeader>
                                <IonCardTitle>
                                    <h1 style={{ fontSize: 'medium'}}>Lorem ipsum</h1>
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
    </div>
  );
}

export default Services;
