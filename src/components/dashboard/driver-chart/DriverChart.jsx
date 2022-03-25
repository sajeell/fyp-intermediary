import React, { Component } from 'react'

import './DriverChart.css'

import CanvasJSReact from '../../../static/assets/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class DriverChart extends Component {
  render() {
    const options = {
      head: '',
      tite: {
        text: '',
      },
      backgroundColor: '#b9c4cb',
      height: 250,
      width: 450,
      colorSet: ['#2F4F4F', '#008080', '#2E8B57', '#3CB371', '#90EE90'],
      animationEnabled: true,
      data: [
        {
          type: 'column',
          dataPoints: [
            { label: 'Product 1', y: 55, color: '#383838' },
            { label: 'Product 2', y: 50, color: '#434343' },
            { label: 'Product 3', y: 45, color: '#4e4e4e' },
            { label: 'Product 4', y: 35, color: '#5a5a5a' },
            { label: 'Product 5', y: 30, color: '#656565' },
            { label: 'Product 6', y: 25, color: '#707070' },
            { label: 'Product 7', y: 20, color: '#7e7e7e' },
            { label: 'Product 8', y: 15, color: '#8d8d8d' },
            { label: 'Product 9', y: 10, color: '#9b9b9b' },
            { label: 'Product 10', y: 5, color: '#a9a9a9' },
          ],
        },
      ],
    }

    return (
      <div className='driver-chart-wrapper'>
        <CanvasJSChart options={options} />
      </div>
    )
  }
}

export default DriverChart
