import './Orders.css'

import ViewTable from './ViewTable'

const Orders = () => {
  return (
    <div className='orders-wrapper'>
      <h1>Orders</h1>
      <div className='orders-heading'>
        <span>Search</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Orders
