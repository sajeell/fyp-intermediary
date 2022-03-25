import AreaChart from './area-chart/AreaChart'
import './Dashboard.css'
import DriverChart from './driver-chart/DriverChart'

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <h2>Dashboard</h2>
      <span className='report'>Print Report</span>
      <div className='dashboard-small-boxes-wrapper'>
        <div className='dashboard-small-box'>
          <div className='dashboard-small-box-row-1'>
            <div className='dashboard-small-box-row-1-heading'>Ongoing</div>
          </div>
          <div className='dashboard-small-box-row-2'>6 orders</div>
        </div>
        <div className='dashboard-small-box'>
          <div className='dashboard-small-box-row-1'>
            <div className='dashboard-small-box-row-1-heading'>Today</div>
            <div className='dashboard-small-box-row-1-stats'>↑ 5.56%</div>
          </div>
          <div className='dashboard-small-box-row-2'>6 orders</div>
        </div>
        <div className='dashboard-small-box'>
          <div className='dashboard-small-box-row-1'>
            <div className='dashboard-small-box-row-1-heading'>Yesterday</div>
            <div className='dashboard-small-box-row-1-date'>11-Oct</div>
          </div>
          <div className='dashboard-small-box-row-2'>6 orders</div>
        </div>
      </div>
      <div className='dashboard-graphs-wrapper'>
        <div className='dashboard-left-graph'>
          <div className='graph-heading-wrapper'>
            <div className='empty-div'></div>
            <div className='graph-heading'>Top 10 Products</div>
          </div>
          <div className='graph'>
            <DriverChart />
          </div>
        </div>
        <div className='dashboard-right-graph'>
          <div className='graph-heading-wrapper'>
            <div className='empty-div'></div>
            <div className='graph-heading'>Top 5 Areas</div>
          </div>
          <div className='graph'>
            <AreaChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
