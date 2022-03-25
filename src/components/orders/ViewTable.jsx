import { Button, Row } from 'react-bootstrap'
import './Orders.css'

const ViewTable = () => {
  return (
    <>
      <div className='search-wrapper'>
        <div className='search-input'>
          <input type='text' placeholder='ID' />
        </div>
        <div className='search-input'>
          <input type='text' placeholder='Name' />
        </div>
        <div className='search-input'>
          <select>
            <option>Type</option>
            <option value='Service' defaultChecked>
              Select
            </option>
            <option value='Antique'>Antique</option>
            <option value='Handmade'>Handmade</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className='action-button'>Search</div>
        &nbsp; &nbsp; &nbsp;
        <div className='action-button'>Reset</div>
      </div>
      <br />
      <br />
      <div className='orders-heading'>
        <span>View</span>
      </div>
      <div className='view-table-wrapper'>
        <div className='view-table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Added On</th>
                <th>Sold</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#1234567891010110</td>
                <td>Acoustic Guitar</td>
                <td>Antique</td>
                <td>22 June, 2021</td>
                <td>22</td>
                <td>
                  <Row>
                    <Button variant='outline-info' style={{ borderRadius: 50 }}>
                      View Details
                    </Button>
                  </Row>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewTable
