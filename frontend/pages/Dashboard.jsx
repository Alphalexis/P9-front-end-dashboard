import React from 'react';
import './Dashboard.css';
import Grapharea from '../components/Grapharea'
import Graphbar from '../components/Graphbar'
import Graphradar from '../components/Graphradar'
import Graphradial from '../components/Graphradial'

function Dashboard() {

    return (
        <div>
            <Grapharea></Grapharea>
            <Graphbar></Graphbar>
            <Graphradar></Graphradar>
            <Graphradial></Graphradial>
        </div>
    );
}

export default Dashboard