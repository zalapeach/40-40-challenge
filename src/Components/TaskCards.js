import React  from 'react';
import Counter from './CounterTime';

const TaskCard =({ Project, Homework}) => {
    return (
        <div className='col-sm-4 divCards'>
                <div className='card border-success mb-3'>
                    <div className='card-header'>{Project}Nombre del proyecto</div>
                        <div className='card-body'>{Homework}Nombre de tarea</div>
                        <div className='card-header'><Counter/></div>
                        <div>
                        </div>
                   
                </div>
            </div>   
    )
}
export default TaskCard

