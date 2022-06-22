import React, { useEffect, useState } from 'react';
import { IonCardTitle,IonToolbar,IonButtons, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonTitle, IonCard, IonCardContent, IonButton, IonIcon, IonRow, IonCol, } from '@ionic/react';
import { shapesOutline } from "ionicons/icons";
import api from '../services/api';
import { Link } from 'react-router-dom';


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

	const goToProject = (e:any, id: string) => {
		e.preventDefault()
		console.log('clicked');
		window.location.href = `/projects/${id}`;
		console.log(id);
		
	}

	useEffect(()=>{
        fetchData()
    },[projects])

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
            { projects.map((project)=> (
			<IonCard key={project._id} type='submit' style={{pointerEvents: 'auto'}}>
				<img src={`http://localhost:9900/images/image/${project.images[0]}`} className="mx-auto d-block card-img-top"   alt="heyy" />				
				<IonCardContent>
					<IonCardTitle >
						{project.name}
					</IonCardTitle>
					<a> {project.budget} </a>
					<p>
						{project.description}
					</p>
					<Link type='submit' to={`/projects/${project._id}`}>
						more details
					</Link>
				</IonCardContent>
			</IonCard>
				))	}
		</IonContent>
    </IonPage>
);
};

export default Home;
