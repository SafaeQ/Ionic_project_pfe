import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonTitle, IonGrid, IonRow, IonCol, IonAlert, IonItem, IonLabel, IonInput, IonButton, IonFooter } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { PropsWithRef, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';

const EditProject = (props: PropsWithRef<any>) => {

    const initialData = {
        id: null,
        name: '',
        description: '',
        budget: '',
        images:''
    }

    const history = useHistory()

    const [newProject, setNewProject] = useState(initialData);

    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const updateProject = (id: any) => {
        
        return api.put(`/api/${id}`, newProject)
        .then((res: any)=> {
            setNewProject(res.data)
            console.log('responce', res.data);
            // history.push('/projects')
        })
        .catch((err) => {
            console.log('err',err);
        })
    }
    console.log(newProject);

    
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
                                <IonInput name='name' type='text' value={newProject.name} onChange={handleInputChange} ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Your Budget</IonLabel>
                                <IonInput name='budget' type='number' value={newProject.budget} onChange={handleInputChange} ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Description</IonLabel>
                                <IonInput name='description' type='text' value={ newProject.description } onChange={handleInputChange} ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol>
                                <input type='file' accept="image/*"  name='images' value={ newProject.images } onChange={handleInputChange} />
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol size="12" className="col-md-12 text-center">
                            <IonButton color='danger' type='submit' onClick={ updateProject } > Done </IonButton>
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
