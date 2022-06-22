import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { shapesOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';



const DetailsProject: React.FC = (props) => {
  const [projects, setProjects] = useState([]);

  const fetchDatabyId = (id: string) => {   
    api.get(`/api/projects/${id}`)
		.then((res) => {
			setProjects(res.data)
      console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		})
  }

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
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
                        <IonTitle style={{fontSize: 'larger'}}>details</IonTitle>  
                </IonToolbar>
            </IonHeader>
        </IonContent>
        <div>
            {/* <h1> {projects.name} </h1> */}
        </div>
      </IonPage>
    </>
  );
}

export default DetailsProject;
