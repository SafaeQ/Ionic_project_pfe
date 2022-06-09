import React, {useState} from 'react';
import { IonButton, IonToolbar, IonTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonItem, IonLabel, IonInput, } from '@ionic/react';
import { Action } from '../utils/Action';
import { Wave } from '../utils/Wave';

function LoginAsso() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email: string) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    
    const validatePassword = (password: string) => {
        let re = /[0-9]+/;
        return re.test(password);
    };


    const handleSubmit = () => {
        if (email === "" || password === "") {
            setMessage("Fill in all fields");
        } else if (!validateEmail(email)) {
            setMessage("Only valid email addresses are accepted");
        } else if (password.length <= 10) {
            setMessage("Password should have more than 10 characters");
        } else if (!validatePassword(password)) {
            setMessage("Password should include numbers");
        } else {
            setMessage("");
            setPassword("");
            setEmail("");
        }
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
                <IonRow className="ion-padding">
                    <IonCol >
                        <IonItem>
                            <IonLabel position='floating'> Your Email</IonLabel>
                            <IonInput name="email" type='email'></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                    <IonCol>
                        <IonItem>
                            <IonLabel position='floating'> Your Password</IonLabel>
                            <IonInput name="passowrd" type='password' ></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="justify-content-md-center">
                    <IonCol size="12" className="col-md-12 text-center">
                        <IonButton color='danger' type='submit' onClick={handleSubmit}> Login </IonButton>
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


