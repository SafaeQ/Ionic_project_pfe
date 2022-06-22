import {useState} from 'react'
import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter,IonItem, IonLabel, IonInput, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router';
import { arrowBack, shapesOutline } from "ionicons/icons";
import { Action } from '../utils/Action';
import { Wave } from '../utils/Wave';
import api from '../../services/api';
import authService from '../../services/auth.services';

const SignupAssoc = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [adress, setAdress] = useState('');
    const [members, setMembers] = useState('');
    const [description, setDescription] = useState('');
    
    let history = useHistory()


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        try {
            await authService.signup(email, password, fullName, phoneNumber, adress, members, description).then(
                (res: any) => {
                    history.push("/login");
                }
            )
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
            <IonHeader collapse="condense" >
                <IonToolbar>
                        <IonTitle>Signup Association {email} </IonTitle>  
                </IonToolbar>
            </IonHeader>
                <IonGrid className="ion-padding">
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Full Name</IonLabel>
                                <IonInput type='text'value={fullName}  onKeyUp={(e) => setFullName((e.target as HTMLInputElement).value)}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'> Your Email</IonLabel>
                                <IonInput type='email'value={email}  onKeyUp={(e) => setEmail((e.target as HTMLInputElement).value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Your Password</IonLabel>
                                <IonInput type='password'value={password}  onKeyUp={(e) => setPassword((e.target as HTMLInputElement).value)}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Members</IonLabel>
                                <IonInput type='number' value={members} onKeyUp={(e) => setMembers((e.target as HTMLInputElement).value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin ">
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Phone Number</IonLabel>
                                <IonInput type='tel'value={phoneNumber}  onKeyUp={(e) => setPhoneNumber((e.target as HTMLInputElement).value)}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'> Adress </IonLabel>
                                <IonInput type='text'value={adress}  onKeyUp={(e) => setAdress((e.target as HTMLInputElement).value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>                    
                    <IonRow className="ion-no-margin ">
                        <IonCol >
                            <IonItem>
                                <IonLabel position='floating'>Description </IonLabel>
                                <IonInput type='text'value={description}  onKeyUp={(e) => setDescription((e.target as HTMLInputElement).value)}></IonInput>
                            </IonItem>
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

