import { useEffect } from 'react'
import { Button, Row } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { fetchRequests } from '../../redux/requests/requests.action'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './Intermediary.css'

const ViewTable = () => {
  const token = useSelector((state) => state.user.token)
  const requests = useSelector((state) => state.request.requests)
  const dispatch = useDispatch()

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const fetchRequestsAPI = (token) => {
    if (token) {
      const agentID = jwt_decode(token)._id
      dispatch(fetchRequests(token, agentID))
    }
  }

  const convertToNormalDate = (dateArg) => {
    const date = new Date(dateArg)

    return `${date.getDate()} ${month[date.getMonth()]},${date.getFullYear()}`
  }

  useEffect(() => {
    fetchRequestsAPI(token)
  }, [token])

  return (
    <>
      <br />
      <div className='intermediary-heading'>
        <span>View</span>
      </div>
      <ToastContainer />
      <div className='view-table-wrapper'>
        <div className='view-table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ProductID</th>
                <th>Commission</th>
                <th>Created On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((request, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{request.productID}</td>
                    <td>{request.commission}</td>
                    <td>{convertToNormalDate(request.createdAt)}</td>
                    <td>
                      <Row>
                        <CopyToClipboard
                          text={`https://barganttic.com/intermediary/${request._id}`}
                          onCopy={() => toast.success('Copied to clipboard')}
                        >
                          <Button
                            variant='outline-info'
                            style={{ borderRadius: 50 }}
                          >
                            Copy Link
                          </Button>
                        </CopyToClipboard>
                      </Row>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewTable
