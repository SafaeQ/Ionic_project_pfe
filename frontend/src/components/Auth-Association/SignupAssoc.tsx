import { IonBackButton, IonButton, IonButtons, IonCardTitle, IonCol, IonContent, IonFooter,IonItem, IonLabel, IonInput, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';

import { arrowBack, shapesOutline } from "ionicons/icons";
import { Action } from '../utils/Action';
import { Wave } from '../utils/Wave';

const SignupAssoc = () => {

	return (
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
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol size="12" >
                            <IonCardTitle>Signup Association</IonCardTitle>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Full Name</IonLabel>
                                <IonInput type='text'></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Your Email</IonLabel>
                                <IonInput type='email'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Your Password</IonLabel>
                                <IonInput type='password'></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Members</IonLabel>
                                <IonInput type='number'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Phone Number</IonLabel>
                                <IonInput type='tel'></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Adress </IonLabel>
                                <IonInput type='text'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'>Description </IonLabel>
                                <IonInput type='text'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-padding ">
                        <IonCol>
                                <input type='file' accept="image/*"  name='image'/>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-padding">
                        <IonCol size="12" className="col-md-12 text-center">
                            <IonButton color='danger' type='submit'> SignUp </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className="ion-no-margin ion-no-padding">
                    <Action message="Already got an account?" text="Login" link="/login" />
                    <Wave />
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default SignupAssoc;