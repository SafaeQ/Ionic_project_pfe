import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { shapesOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom'



const DetailsProject: React.FC = (props) => {
  
  const [projects, setProjects] = useState<Array<Object>>([]);

  type Params = {
    id: string;
  };

  const {id} = useParams<Params>()

  useEffect(() => {
    
    api.get(`/api/projects/${id}`)
		.then((res) => {
			setProjects(res.data)
      console.log("test",res.data.data.name);
		})
		.catch(err => {
			console.log(err);
		})
    // console.log("dataan",projects.data.name);
    
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
                        <IonTitle style={{fontSize: 'larger'}}>details</IonTitle>  
                </IonToolbar>
            </IonHeader>
        </IonContent>
        <div>
            {/* <h1> {projects.data.name} </h1> */}
        </div>
      </IonPage>
    </>
  );
}

export default DetailsProject;
