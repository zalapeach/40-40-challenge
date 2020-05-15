import React  from 'react';
import '../Styles/TaskCard.css';


const TaskCard =({Contador, Project, Homework}) => {
    return (
        <div className='col-sm-4 divCards'>
                <div className='card border-success mb-3'>
                    <div className='card-header'>{Project}Nombre del proyecto</div>
                        <div className='card-body'>{Homework}Nombre de tarea</div>
                        <div className='card-header'>{Contador}Contador</div>
                        <div>
                            <button className='btn btn-success btnInit'><i class="fas fa-play"></i></button>
                            <button className='btn btn-primary'><i class="fas fa-pause"></i></button>
                        </div>
                   
                </div>
            </div>   
    )
}
export default TaskCard

