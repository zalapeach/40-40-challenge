import React, { Component } from 'react';
import TaskCard from '../Components/TaskCards';
import Navbar from '../Components/navigation/Navbar';

export default class Task extends Component{
    render(){
        return<div id='containerTask'>
            <Navbar/>
            <TaskCard Project= 'Cubos' Homework='Hacer Login' status='En progreso'/>
            <TaskCard Project= 'Cubos' Homework='Hacer testing' status='En progeso'/>
        </div>
    }
}



