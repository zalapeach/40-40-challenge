import React  from 'react';
import Counter from '../librery/CounterTime';
import SelectStatus from './SelectStatus';

const TaskCard =({ Project, Homework, status}) => {
    return (
        <div className='col-sm-4 divCards'>
                <div className='card border-success mb-3'>
                    <div className='card-header'>{Project}</div>

                        <div className='card-body'>{Homework}</div>

                        <div className= 'card-header'> <SelectStatus status={status}/></div>
                        
                        <div className='card-header'><Counter/></div>
                        <div>
                        </div>
                </div>
            </div>   
    )
}
export default TaskCard

