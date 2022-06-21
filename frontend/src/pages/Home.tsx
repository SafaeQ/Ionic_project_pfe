import React, { useEffect, useState } from 'react';
import { IonCardTitle,IonToolbar,IonButtons, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonTitle, IonCard, IonCardContent, IonButton, IonIcon, IonRow, IonCol, } from '@ionic/react';
import { shapesOutline } from "ionicons/icons";
import api from '../services/api';


const Home: React.FC = (props) => {

	const [projects, setProjects] = useState<any[]>([]);

	const fetchData = ()=> {
		api.get('/api/projects')
		.then((res) => {
			setProjects(res.data.data)
		})
		.catch(err => {
			console.log(err);
		})
	}

	const goToProject = (id: number) => {
		window.location.href = `/projects/${id}`;
	}

	useEffect(()=>{
        fetchData()
    },[])

return (
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
                        <IonTitle style={{fontSize: 'larger'}}>Home</IonTitle>  
                </IonToolbar>
            </IonHeader>
			<IonGrid>
				<IonRow>
					<IonCol size="12" className="col-md-12 text-center">
						<IonButton color='danger' routerLink='/create-project'> New Project </IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>
			<IonCard >
				<IonCardContent>
					<IonCardTitle style={{fontSize: 'medium'}}>
						title project
					</IonCardTitle>
					<a> 4004 DH </a>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae quas sit sapiente accusantium amet. Ipsum quas, similique qui numquam ea praesentium fuga, eligendi debitis magnam enim assumenda iure earum.
					</p>
				</IonCardContent>
			</IonCard>
            { projects.map((project, i)=> (
			<IonCard key={i} type='submit' style={{pointerEvents: 'auto'}}>
				<img src={`http://localhost:9900/images/image/${project.images[0]}`} className="mx-auto d-block card-img-top"   alt="heyy" />				
				<IonCardContent>
					<IonCardTitle >
						{project.name}
					</IonCardTitle>
					<a> {project.budget} </a>
					<p>
						{project.description}
					</p>
				</IonCardContent>
			</IonCard>
				))	}
		</IonContent>
    </IonPage>
);
};

export default Home;
