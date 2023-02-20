import {mainData, activity, averageSessions, performance} from "../../app/dataservice"
const url = "http://localhost:3000/user";

/**
 * retrieve data 
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 */

const getData = async (id, categorie) => {
    let urlCall = categorie ? url + `/${id}/${categorie}/` : url+ `/${id}/`;
    console.log (urlCall)

    const data = await fetch(urlCall);
    console.log (data)

    const dataFetch = await data.json();
    console.log(dataFetch)
    
    switch (categorie) {
        case "activity": return new activity(dataFetch.data);
        case "average-sessions": return new  averageSessions(dataFetch.data);
        case "performance": return new performance(dataFetch.data);

        default: return new mainData(dataFetch.data);
    }}

export default getData