import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';

interface Props {

}

const AddProject: React.FC<Props> = (props) => {
    let history = useHistory()

    const initialValues = {
        name: "",
        budge: "",
        description: "",
        category: "",
        images: "",
        assocition: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});


    function handleChange(event: any) {
        const {name , value} = event.target
        setFormValues({ ...formValues, [name]: value })
    }

    const registerSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        api.post('/api/create-project', initialValues)
        .then(res => {    
            console.log(res.data)
            history.push("/home");
        })
        .catch(err=> {
            console.log(err);
            setFormErrors(formValues);  
        })
    };

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
			<IonContent fullscreen>
            <IonHeader collapse="condense" >
                <IonToolbar>
                        <IonTitle>Add New Project</IonTitle>  
                </IonToolbar>
            </IonHeader>
                <IonGrid className="ion-padding">
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Title</IonLabel>
                                <IonInput name='name' type='text' ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Your Budget</IonLabel>
                                <IonInput name='budget' type='number'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Category</IonLabel>
                                <IonInput name='category' type='text'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Description</IonLabel>
                                <IonInput name='description' type='text'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol>
                                <input type='file' accept="image/*"  name='images'/>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol size="12" className="col-md-12 text-center">
                            <IonButton color='danger' type='submit'> Add </IonButton>
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

export default AddProject;
