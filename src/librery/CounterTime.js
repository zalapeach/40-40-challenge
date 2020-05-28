import React  from 'react';
import Timer from 'react-compound-timer';
import moment from 'moment';
import TimeObj from '../Components/TimeOb';
import '../Styles/TaskCard.css';

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
            <button className='btn btn-lg disabled btn-outline-danger btn-block '>
                <Timer.Days /> {'Días '}
                <Timer.Hours /> {'Horas '}
                <Timer.Minutes /> {'Minutos '}
                <Timer.Seconds /> {'Segundos '}
            </button>
            </div>
            <div className='row'>
                <div className='col'>
                <button onClick={start} className='btn btn-success btnInit'><i className="fas fa-play"></i></button>
                <button onClick={pause} className='btn btn-primary'><i className="fas fa-pause"></i></button>
                </div>
            </div>
            </div>
        </React.Fragment>
    )}
</Timer>
    )
}

export default Counter