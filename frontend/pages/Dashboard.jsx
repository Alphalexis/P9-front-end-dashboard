import React from 'react';
import './Dashboard.css';
import Grapharea from '../components/Grapharea'
import Graphbar from '../components/Graphbar'
import Graphradar from '../components/Graphradar'
import Graphradial from '../components/Graphradial'
import getData from '../fetch/Fetchapi'
import { useParams } from "react-router-dom";

function Dashboard() {
    let { id } = useParams();

    console.log(id, "id");
  
    const data = getData(id,"activity")
    console.log(data,"data");
    //const item = data.find(element => element.id === id);
//TODO récuperer l'id du user
//TODO faire appel a getData pour recuperer les données en fonction de l'id du user et la catégorie
//TODO passer les données en props aux differents composants
    return (
        <h1>Alexis</h1>
        // <div>
        // {item.map((item) => (
        //     <><Grapharea id={item.id} sessions={item.sessions} day={item.sessions.day} session={item.sessions.sessionLength}></Grapharea><Graphbar></Graphbar><Graphradar></Graphradar><Graphradial></Graphradial></>
        //     ))}
        // </div>
        
    );
}

export default Dashboard