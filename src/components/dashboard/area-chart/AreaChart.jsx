import React, { Component } from 'react'

import './AreaChart.css'

import CanvasJSReact from '../../../static/assets/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class AreaChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      width: 350,
      height: 250,
      backgroundColor: '#b9c4cb',
      data: [
        {
          type: 'pie',
          startAngle: 75,
          toolTipContent: '<b>{label}</b>: {y}%',
          showInLegend: 'true',
          legendText: '{label}',
          indexLabelFontSize: 16,
          dataPoints: [
            { y: 18, label: 'G-15', color: '#707070' },
            { y: 49, label: 'F-15', color: '#8c9497' },
            { y: 9, label: 'G-10', color: '#848482' },
            { y: 5, label: 'G-11', color: '#7f7679' },
            { y: 19, label: 'F-6', color: '#878f99' },
          ],
        },
      ],
    }

    return (
      <div className='area-chart-wrapper'>
        <CanvasJSChart options={options} />
      </div>
    )
  }
}

export default AreaChart
