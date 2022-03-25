import './Intermediary.css'

import ViewTable from './ViewTable'

const Intermediary = () => {
  return (
    <div className='intermediary-wrapper'>
      <h1>Intermediary</h1>
      <div className='intermediary-heading'>
        <span>Search</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Intermediary
