import React from 'react';

import { IonButton, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
					<IonImg src="../assets/images/media.png"/>
		</IonHeader>
        
		<IonContent fullscreen>

				
					<IonGrid>
						<IonRow >
							<IonCol size="11">
								<IonCardTitle>Join millions of other people discovering their creative side</IonCardTitle>
							</IonCol>
						</IonRow>

						<IonRow className={ `ion-text-center ion-justify-content-center` }>
							<IonRouterLink routerLink="/signup" className="custom-link">
								<IonCol size="11">
									<IonButton >Get started &rarr;</IonButton>
								</IonCol>
							</IonRouterLink>
						</IonRow>
					</IonGrid>
			
		</IonContent>

		<IonFooter>
			<IonGrid>
				{/* <Action message="Already got an account?" text="Login" link="/login" /> */}				</IonGrid>
		</IonFooter>
    </IonPage>
  );
};

export default Home;
