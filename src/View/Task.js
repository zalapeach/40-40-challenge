import React, { Component } from 'react';
import TaskCard from '../Components/TaskCards';
import Navbar from '../Components/navigation/Navbar';

export default class Task extends Component{
    render(){
        return<div>
            <Navbar/>
            <TaskCard Project= 'Cubos' Homework='Hacer Login'/>
            <TaskCard Project= 'Cubos' Homework='Hacer testing'/>
        </div>
    }
}



