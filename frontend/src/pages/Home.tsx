import React from 'react';
import { IonCardTitle,IonToolbar,IonButtons, IonBackButton, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonTitle, IonCard, IonCardContent, } from '@ionic/react';
import { arrowBack } from "ionicons/icons";


const Home: React.FC = () => {
return (
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
                        <IonTitle >Home</IonTitle>  
                </IonToolbar>
            </IonHeader>
			<IonCard>
				<img src="../assets/images/media.png" alt="heyy" />
				<IonCardContent>
					<IonCardTitle >
						Heyyy
					</IonCardTitle>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed in lobortis nisl, vitae iaculis sapien.
					</p>
				</IonCardContent>
			</IonCard>		
		</IonContent>
		<IonFooter>
			<IonGrid>
				{/* <Action message="Already got an account?" text="Login" link="/login" /> */}				</IonGrid>
		</IonFooter>
    </IonPage>
  );
};

export default Home;
