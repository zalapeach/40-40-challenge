import React from 'react';
import Chart from "react-google-charts";
import Navbar from '../Components/navigation/Navbar';

const Graphics = ({arrayData})=>{
    return(
        <div>
        <Navbar/>
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Users', 'Project Cubos'],
    ['Brenda', 5.85],
    ['Yaidi', 1.66],
    ['Vivi', 1],
    ['Sam', 4],
    ['Carlos', 4]
  ]}
  options={{
    legend: 'none',
    pieSliceText: 'label',
    title: 'Grafica de usuario por dia',
    pieStartAngle: 100,
  }}
  rootProps={{ 'data-testid': '4' }}
/>
        </div>
    )
}
export default Graphics
