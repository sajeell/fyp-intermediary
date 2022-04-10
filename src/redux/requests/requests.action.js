import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'
import URL from '../../constants/constants'

const Url = URL

export const setRequests = (requests) => ({
  type: ActionsType.SET_REQUESTS,
  payload: requests,
})

export const fetchRequests = (token, agentID) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    axios
      .get(`${Url}intermediary/by/agent/${agentID}`, {
        headers: headers,
      })
      .then((resp) => {
        let response = resp.data
        dispatch(setRequests(response))
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  }
}
