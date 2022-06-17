import {useState} from 'react'
import { IonBackButton, IonButton, IonButtons, IonCardTitle, IonCol, IonContent, IonFooter,IonItem, IonLabel, IonInput, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import { arrowBack, shapesOutline } from "ionicons/icons";
import { Action } from '../utils/Action';
import { Wave } from '../utils/Wave';
import api from '../../services/api';

const SignupAssoc = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [adress, setAdress] = useState('');
    const [members, setMembers] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    
    let history = useHistory()

    const handleChangeInput = (e: any) => {
        const { fullName, email, password, phoneNumber, adress, members, description } = e.target;

        if (fullName === "fullName") {
            setFullName(fullName.value);
        }
        if (email === "email") {
            setEmail(email.value);
        }
        if (password === "password") { 
            setPassword(password.value);
        }
        if (phoneNumber === "phoneNumber") {
            setPhoneNumber(phoneNumber.value);
        }
        if (adress === "adress") {
            setAdress(adress.value);
        }
        if (members === "members") {
            setMembers(members.value);
        }
        if (description === "description") {
            setDescription(description.value);
        }
        
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        try {
            let data = {
                "fullName": fullName,
                "email": email,
                "password": password,
                "phoneNumber": phoneNumber,
                "adress": adress,
                "members": members,
                "description": description,
                "image": image
            }
            api.post("/register-association", data)
                .then(res => {
                    console.log(res.data)
                    history.push("/home");
                })

        } catch (error) {
            console.log(error);
            history.push("/signup");
        }
    }

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
                                <IonInput type='text' onIonChange={handleChangeInput}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Your Email</IonLabel>
                                <IonInput type='email' onIonChange={handleChangeInput}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Your Password</IonLabel>
                                <IonInput type='password' onIonChange={handleChangeInput}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Members</IonLabel>
                                <IonInput type='number' onIonChange={handleChangeInput}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Phone Number</IonLabel>
                                <IonInput type='tel' onIonChange={handleChangeInput}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Adress </IonLabel>
                                <IonInput type='text' onIonChange={handleChangeInput}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>                    
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'>Description </IonLabel>
                                <IonInput type='text' onIonChange={handleChangeInput}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding ">
                        <IonCol>
                                <input type='file' accept="image/*"  name='image' onChange={handleChangeInput}/>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding">
                        <IonCol size="12" className="col-md-12 text-center">
                            <IonButton color='danger' type='submit' onClick={handleSubmit}> SignUp </IonButton>
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