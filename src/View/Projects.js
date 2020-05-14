import React from 'react';
import TableProjects from './../Components/TableProjects';

const Projects = ()=>{
return(
<div>
    <table className='table table-bordered'>
        <thead className='table-light'>
            <tr>
                <th>Proyecto</th>
                <th>Tarea</th>
                <th>Prioridad</th>
            </tr>
        </thead>
        <tbody>
        <TableProjects />
        </tbody>
    </table>
</div>
)
}
export default Projects