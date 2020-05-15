import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import TaskCard from '../Components/TaskCards';
import Navbar from '../Components/navigation/Navbar';

export default class Task extends Component{
    render(){
        return<div>
            <Navbar/>
            <TaskCard/>
        </div>
    }
}



