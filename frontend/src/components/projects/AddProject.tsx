import { IonAlert, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
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
    const [name, setname] = useState('');
    const [budge, setbudge] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');
    const [images, setimages] = useState('');
    const [message, setMessage] = useState('');
    const [iserror, setIserror] = useState<boolean>(false);

    function handleChangeName(event: any) {
        setname(event.detail.value!)
    }
    function handleChangeBudget(event: any) {
        setbudge(event.detail.value!)
    }
    function handleChangeDescription(event: any) {
        setdescription(event.detail.value!)
    }
    function handleChangeCategory(event: any) {
        setcategory(event.detail.value!)
    }
    function handleChangeImages(event: any) {
        setimages(event.detail.value!)
    }

    const registerSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('click');
        
        const initialValues = {
            name: name,
            budge: budge,
            description: description,
            category: category,
            images: images,
            // assocition: assocition
        };

        api.post('/api/create-project', initialValues)
        .then(res => {    
            console.log(res.data)
            history.push("/home");
        })
        .catch(err=> {
            console.log(err);
            setMessage("Adding project failure! Please try again");
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
			<IonContent fullscreen >
            <IonHeader collapse="condense" >
                <IonToolbar>
                        <IonTitle>Add New Project</IonTitle>  
                </IonToolbar>
            </IonHeader>
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol>
                            <IonAlert
                                isOpen={iserror}
                                onDidDismiss={() => setIserror(false)}
                                cssClass="my-custom-class"
                                header={"Error!"}
                                message={message}
                                buttons={["Dismiss"]}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Title</IonLabel>
                                <IonInput name='name' type='text' onIonChange={handleChangeName}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Your Budget</IonLabel>
                                <IonInput name='budget' type='number' onIonChange={handleChangeBudget}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Category</IonLabel>
                                <IonInput name='category' type='text' onIonChange={handleChangeCategory}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Description</IonLabel>
                                <IonInput name='description' type='text' onIonChange={handleChangeDescription}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol>
                                <input type='file' accept="image/*"  name='images' onChange={handleChangeImages}/>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol size="12" className="col-md-12 text-center">
                            <IonButton color='danger' type='submit' onClick={registerSubmitHandler}> Add </IonButton>
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
