import  React from 'react';
import '../Styles/Projects.css'
import { Link } from 'react-router-dom';

const TableProjects = ({Project, Homework, Priority})=>{
    return(
        <tr className='table'>
        <td>
       <Link to='/Task'><button type='button' className='btn btn-outline-dark btn-lg btn-block'>{Project}</button> </Link> 
       </td>
        <td>
            {Homework}
        </td>
        <td>
        <div className='input-group mb-3'>
            <select className='custom-select' id='inputGroupSelect02'>
                <option selected className="alert alert-dark" role="alert"> {Priority}</option>
                <option defaultValue='1' className='High'> High</option>
                <option defaultValue='2' className='Medium'> Medium</option>
                <option defaultValue='3' className='Low'> Low</option>

            </select>
  <div className='input-group-append'>
  </div>
</div>
        
         </td>
        </tr>
    )
}
export default TableProjects
