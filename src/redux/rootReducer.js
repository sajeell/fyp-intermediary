import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import requestReducer from './requests/requests.reducer'

import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  request: requestReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

export default persistReducer(persistConfig, rootReducer)
