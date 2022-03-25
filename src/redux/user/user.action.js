import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'
import URL from '../../constants/constants'

const Url = URL

export const setCurrentUser = (user) => ({
  type: ActionsType.SET_CURRENT_USER,
  payload: user,
})

export const setUserDetail = (user) => ({
  type: ActionsType.SET_USER_DETAIL,
  payload: user,
})

export const setAuthToken = (token) => ({
  type: ActionsType.SET_TOKEN,
  payload: token,
})

export const createAccount = (data) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
    }
    axios
      .post(`${Url}/auth/register`, data, { headers: headers })
      .then((resp) => {
        let response = resp.data
        console.log('createAccount: ', response)
        dispatch(setCurrentUser(response.user))
        dispatch(setAuthToken(response.access_token))
        alert('Account created successfully')
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  }
}

export const sellerLogin = (data) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
    }
    axios
      .post(`${Url}auth/login`, data, { headers: headers })
      .then(async (resp) => {
        let response = resp.data
        if (response.data && response.data.role === 'Seller') {
          dispatch(setCurrentUser(response.data))
          dispatch(setAuthToken(response.access_token))
          toast.success('Success', {
            theme: 'colored',
            style: {
              borderRadius: 5,
            },
            delay: 5000,
          })

          window.location.href = '/dashboard'
        } else {
          toast.error('Seller not registered on this account', {
            theme: 'colored',
            style: {
              borderRadius: 5,
            },
          })
        }
      })
      .catch((error) => {
        const err = error
        toast.error(err.message, {
          theme: 'colored',
          style: {
            borderRadius: 5,
          },
        })
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(setAuthToken(null))
    localStorage.clear()
  }
}
