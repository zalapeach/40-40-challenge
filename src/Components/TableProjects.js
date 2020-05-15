import  React from 'react';
import '../Styles/Projects.css'

const TableProjects = ({Project, Homework, Priority})=>{
    return(
        <tr className='table'>
        <td>
        <button type='button' className='btn btn-outline-dark btn-lg btn-block'>{Project} Aquí se ve el proyecto</button></td>
        <td>
            {Homework} Aquí se ve el num de tareas
        </td>
        <td>
        <div className='input-group mb-3'>
            <select className='custom-select' id='inputGroupSelect02'>
                <option selected> {Priority} P de Tarea</option>
                <option defaultValue='1' className='High'>{Priority} P 1</option>
                <option defaultValue='2' className='Medium'>{Priority} P 2</option>
                <option defaultValue='3' className='Low'>{Priority} P 3</option>
            </select>
  <div className='input-group-append'>
  </div>
</div>
        
         </td>
        </tr>
    )
}
export default TableProjects
