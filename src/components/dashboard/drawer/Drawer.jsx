import { logout } from '../../../redux/user/user.action'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Drawer.css'

const Drawer = (props) => {
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const token = useSelector((state) => state.user.token)

  useEffect(() => {
    if (token === null) {
      return navigate('/')
    }
  }, [token])
  return (
    <div className='drawer-wrapper'>
      <div className='drawer-title-row'>
        <div className='drawer-title'>Barganttic</div>
        <div className='drawer-subtitle'>The E-Commerce Company</div>
      </div>
      <div className='drawer-buttons-wrapper'>
        <div className='drawer-button'>
          <div className='drawer-button-text'>
            {props.dashboard === true ? (
              <strong>- Dashboard</strong>
            ) : (
              <Link to='/'>
                <span>- Dashboard</span>
              </Link>
            )}
          </div>
        </div>

        <div className='drawer-button'>
          <div className='drawer-button-text'>
            {props.products === true ? (
              <strong>- Products</strong>
            ) : (
              <Link to='/products'>
                <span>- Products</span>
              </Link>
            )}
          </div>
        </div>

        <div className='drawer-button'>
          <div className='drawer-button-text'>
            {props.orders === true ? (
              <strong>- Orders</strong>
            ) : (
              <Link to='/orders'>
                <span>- Orders</span>
              </Link>
            )}
          </div>
        </div>

        <div className='drawer-button'>
          <div className='drawer-button-text'>
            {props.intermediary === true ? (
              <strong>- Intermediary</strong>
            ) : (
              <Link to='/intermediary'>
                <span>- Intermediary</span>
              </Link>
            )}
          </div>
        </div>

        <div
          className='drawer-button'
          onClick={() => {
            dispatch(logout())
          }}
        >
          <div className='drawer-button-text'>
            <span>- Log Out</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
