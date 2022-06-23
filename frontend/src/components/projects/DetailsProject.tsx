import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack, shapesOutline } from 'ionicons/icons';
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
                <IonButtons slot="start">
                        <IonBackButton icon={ arrowBack } text="" className="custom-back" />
                </IonButtons>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen> 
            <IonHeader collapse="condense" >
                <IonToolbar>
                        <IonTitle style={{fontSize: 'larger'}}> Project's Details </IonTitle>  
                </IonToolbar>
            </IonHeader>
            <IonCard>
            <img src={`http://localhost:9900/images/image/${project.images}`} className="mx-auto d-block card-img-top"   alt="heyy" />
                <IonCardHeader>
                    <IonCardTitle> {project.name}  </IonCardTitle>
                    <IonCardSubtitle> {project.budget} DH </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent> {project.description} </IonCardContent>
                <IonButtons>
                    <IonButton> Delete </IonButton>
                    <IonButton> Edit </IonButton>
                </IonButtons>
            </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
}

export default DetailsProject;
