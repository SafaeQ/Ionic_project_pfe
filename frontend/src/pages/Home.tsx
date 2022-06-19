import React, { useEffect, useState } from 'react';
import { IonCardTitle,IonToolbar,IonButtons, IonBackButton, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonTitle, IonCard, IonCardContent, } from '@ionic/react';
import { arrowBack } from "ionicons/icons";
import api from '../services/api';


const Home: React.FC = () => {

	const [projects, setProjects] = useState<any[]>([]);

	const fetchData = ()=> {
		api.get('/api/projects')
		.then(res => {
			setProjects(res.data)
		})
		.catch(err => {
			console.log(err);
			
		})
	}

	useEffect(()=>{
        fetchData()
    },[])

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
                        <IonTitle style={{fontSize: 'larger'}}>Home</IonTitle>  
                </IonToolbar>
            </IonHeader>
			<IonCard  >
				{/* <img src={`http://127.0.0.1:9900/${project.images[0]}`} className="mx-auto d-block card-img-top"   alt="heyy" /> */}
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
			{/* {projects.length > 0 ? (
                projects.map((project, i)=> (
			<IonCard  key={i}>
				<img src={`http://127.0.0.1:9900/${project.images[0]}`} className="mx-auto d-block card-img-top"   alt="heyy" />
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
				))
			): (
				<h1>none</h1>
			)} */}
		</IonContent>
		<IonFooter>
			<IonGrid>
				
			</IonGrid>
		</IonFooter>
    </IonPage>
  );
};

export default Home;
