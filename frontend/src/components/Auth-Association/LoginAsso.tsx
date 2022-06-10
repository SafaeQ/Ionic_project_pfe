import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { personCircle } from "ionicons/icons"
import { IonButton, IonToolbar, IonTitle, IonAlert, IonIcon, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonItem, IonLabel, IonInput, } from '@ionic/react';
import { Action } from '../utils/Action';
import { Wave } from '../utils/Wave';

import api from '../../services/api';


function LoginAsso() {
    let history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [iserror, setIserror] = useState<boolean>(false);

    const validateEmail = (email: string) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    
    const validatePassword = (password: string) => {
        let re = /[0-9]+/;
        return re.test(password);
    };


    const handleLogin = () => {
        if (!email) {
            setMessage("Please enter a valid email");
            setIserror(true);
            return;
        }
        if (validateEmail(email) === false) {
            setMessage("Your email is invalid");
            setIserror(true);
            return;
        }
    
        if (!password || password.length < 6) {
            setMessage("Please enter your password");
            setIserror(true);
            return;
        }
    
        const loginData = {
            "email": email,
            "password": password
        }
    
        api.post("/login", loginData)
            .then(res => {             
                history.push("/signup" + email);
             })
             .catch(error=>{
                setMessage("Auth failure! Please create an account");
                setIserror(true)
             })
      };

return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Association Login </IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense" >
                <IonToolbar>
                        <IonTitle size="large">Association Login</IonTitle>  
                </IonToolbar>
            </IonHeader>

            <IonGrid>
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
                <IonRow>
                <IonCol>
                    <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle}
                    />
                </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                    <IonCol >
                        <IonItem>
                            <IonLabel position='floating'> Your Email</IonLabel>
                            <IonInput name="email" type='email' value={email} onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                    <IonCol>
                        <IonItem>
                            <IonLabel position='floating'> Your Password</IonLabel>
                            <IonInput name="passowrd" type='password' value={password} onIonChange={(e) => setPassword(e.detail.value!)} ></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="justify-content-md-center">
                    <IonCol size="12" className="col-md-12 text-center">
                        <IonButton color='danger' type='submit' onClick={handleLogin}> Login </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>

        <IonFooter>
            <IonGrid className='ion-no-margin ion-no-padding'>
                    <Action message="If you don't have an account please" text="Sign up" link="/signup" />
                    <Action message="Donor" text="Login Donor" link="/login-donor" />
                    <Wave/>
            </IonGrid>
        </IonFooter>
    </IonPage>
  );
}

export default LoginAsso;


