import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { shapesOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom'



const DetailsProject: React.FC = (props) => {
  
  const [project, setProject] = useState({}) as any[];

  type Params = {
    id: string;
  };

  const {id} = useParams<Params>()

  useEffect(() => {
    
    api.get(`/api/projects/${id}`)
		.then((res) => {
			setProject(res.data.data)
		})
		.catch(err => {
			console.log(err);
		})
    
  }, []);

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
                        <IonTitle style={{fontSize: 'larger'}}>{project.name}</IonTitle>  
                </IonToolbar>
            </IonHeader>
        </IonContent>
      </IonPage>
    </>
  );
}

export default DetailsProject;
