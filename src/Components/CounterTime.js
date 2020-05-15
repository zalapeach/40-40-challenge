import React  from 'react';
import Timer from 'react-compound-timer';
import moment from 'moment'
import TimeObj from './TimeOb'

const Counter = () =>{
    return(
        <Timer
    initialTime={0}
    startImmediately={false}
    onStart={() => console.log( TimeObj.initDate = moment().format('X'), 'start')}
    onPause={() => console.log( TimeObj.finishDate = moment().format('X'), 'pause')}
>
    {({ start, pause, timerState }) => (
        <React.Fragment>
        <div className='container'>
            <div className='row'>
            <button className='btn btn-lg btn-outline-danger btn-sm'>
                <Timer.Days /> {'Días '}
                <Timer.Hours /> {'Horas '}
                <Timer.Minutes /> {'Minutos '}
                <Timer.Seconds /> {'Segundos '}
            </button>
            </div>
            <div class='row justify-content-around'>
                <div class='col'>
                <button onClick={start} className='btn btn-outline-success btn-sm'>Start</button>
                </div>
                <div class='col'>
                <button onClick={pause} className='btn btn-outline-dark btn-sm'>Pause</button>
                </div>
            </div>
            </div>
        </React.Fragment>
    )}
</Timer>
    )
}

export default Counter
