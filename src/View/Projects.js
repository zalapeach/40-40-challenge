import React from 'react';
import TableProjects from './../Components/TableProjects';
import Navbar from '../Components/navigation/Navbar';
import {mockInfoProjects} from '../librery/mockInfo'

const Projects = ()=>{
return(
<div>  
<Navbar/>
    <table className='table table-bordered'>
        <thead className='table-light'>
            <tr>
                <th>Proyecto</th>
                <th>Tarea</th>
                <th>Prioridad</th>
            </tr>
        </thead>
        <tbody>
        <TableProjects Project='Cubos' Homework='12' Priority='Medium'/>
        <TableProjects Project='Laboratoria' Homework='9' Priority='High'/>
        </tbody>
    </table>
 
   
</div>
)
}
export default Projects
