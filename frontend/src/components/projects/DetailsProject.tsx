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
    <div>
        {/* <h1> {projects.name} </h1> */}
    </div>
  );
}

export default DetailsProject;
