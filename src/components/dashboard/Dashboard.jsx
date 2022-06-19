import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import jwt_decode from "jwt-decode"
import './Dashboard.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchUserDetail } from '../../redux/user/user.action'
import { useState } from 'react'

const Dashboard = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const userDetail = useSelector((state) => state.user.userDetail)
  const [commission, setCommission] = useState(0)

  const dataAPIFetchUsers = (token, userId) => {
    dispatch(fetchUserDetail(token, userId))
  }

  useEffect(() => {
    if (token) {
      const userDetail = jwt_decode(token)
      dataAPIFetchUsers(token, userDetail._id)
    }
  }, [token])

  useEffect(() => {
    if (userDetail) {
      if (userDetail.funds) {
        setCommission(userDetail.funds)
      }
    }
  }, [userDetail])

  return (
    <div className='dashboard-wrapper'>
      <h2>Intermediary Dashboard</h2>
      <span className='report'>Print Report</span>
      <div className='dashboard-small-boxes-wrapper'>
        <div className='dashboard-small-box'>
          <div className='dashboard-small-box-row-1'>
            <div className='dashboard-small-box-row-1-heading'>Total Commission</div>
          </div>
          <div className='dashboard-small-box-row-2'><strong>Rs.</strong> {commission}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
