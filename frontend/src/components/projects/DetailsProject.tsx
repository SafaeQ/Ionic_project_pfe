import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack, shapesOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom'



const DetailsProject: React.FC = (props) => {
  const history = useHistory()

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

  const deleteProject = (id: any)=>{
      console.log(id, 'id');
      api.delete(`/api/${id}`)
      // const newProject = project.filter((project: any) => {
      //     return project._id !== id
      // })
      // setProject(newProject)

      setProject((project: any)=> project.filter((p: any)=> p !== id))
      history.push('/home')
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
                    <br/>
                    <IonCardSubtitle> {project.budget} DH </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent> {project.description} </IonCardContent>
                <IonGrid>
                  <IonRow className="justify-content-md-center">
                    <IonCol size="12" className="col-md-12 text-center">
                      <IonButtons>
                          <IonButton onClick={()=> deleteProject(id) }> Delete </IonButton>
                          <IonButton> Edit </IonButton>
                          <IonButton> Article </IonButton>
                      </IonButtons>
                    </IonCol>
                  </IonRow>
                </IonGrid>
            </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
}

export default DetailsProject;
