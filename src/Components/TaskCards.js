import React  from 'react';
import Counter from './CounterTime';
import SelectStatus from './SelectStatus';

const TaskCard =({ Project, Homework}) => {
    return (
        <div className='col-sm-4 divCards'>
                <div className='card border-success mb-3'>
                    <div className='card-header'>{Project}</div>
                        <div className='card-body'>{Homework}</div>
                        <div className= 'card-header'> <SelectStatus/></div>
                        <div className='card-header'><Counter/></div>
                        <div>
                        </div>
                </div>
            </div>   
    )
}
export default TaskCard

