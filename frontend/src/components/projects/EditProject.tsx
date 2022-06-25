import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonTitle, IonGrid, IonRow, IonCol, IonAlert, IonItem, IonLabel, IonInput, IonButton, IonFooter } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { useState } from 'react';

const EditProject = () => {
    const [project, setProject] = useState();

    const editProject = () => {
        // const  
    }

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
			<IonContent fullscreen >
            <IonHeader collapse="condense" >
                <IonToolbar>
                        <IonTitle>Edit Your Project</IonTitle>  
                </IonToolbar>
            </IonHeader>
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol>
                            <IonAlert
                                  // isOpen={iserror}
                                  // onDidDismiss={() => setIserror(false)}
                                    cssClass="my-custom-class"
                                    header={"Error!"}
                                    // message={message}
                                    buttons={["Dismiss"]} isOpen={false}                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Title</IonLabel>
                                <IonInput name='name' type='text'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Your Budget</IonLabel>
                                <IonInput name='budget' type='number' ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Category</IonLabel>
                                <IonInput name='category' type='text' ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Description</IonLabel>
                                <IonInput name='description' type='text' ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol>
                                <input type='file' accept="image/*"  name='images' />
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol size="12" className="col-md-12 text-center">
                            <IonButton color='danger' type='submit' > Done </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
			</IonContent>
			<IonFooter>
			</IonFooter>
		</IonPage>
    </>
  );
}

export default EditProject;
