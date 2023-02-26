import {mainData, activity, averageSessions, performance} from "../../app/dataservice"
import USER_MAIN_DATA from "../../app/data";

const url = "http://localhost:3000/user";
let isMock = true;

/**
 * retrieve data 
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 */

const getData = async (id, categorie) => {
    if (isMock == true){
        //TODO ici je récupere les donnèes depuis le fichier
        const data = USER_MAIN_DATA.find(element => element.id === id);
        return data
    }
    else {
        //TODO ici je récupere les données depuis un appel d'API  
        let urlCall = categorie ? url + `/${id}/${categorie}/` : url+ `/${id}/`;
        console.log (urlCall)
    
        const data = await fetch(urlCall);
        console.log (data)
    
        const dataFetch = await data.json();
        console.log(dataFetch)
    }

const dataFetch = [];
    
    switch (categorie) {
        case "activity": return new activity(dataFetch.data);
        case "average-sessions": return new  averageSessions(dataFetch.data);
        case "performance": return new performance(dataFetch.data);
        //case
        default: return new mainData(dataFetch.data);
        //defaut: [];
    }}

export default getData