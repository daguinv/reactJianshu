import { combineReducers } from 'redux';
import { headReducer } from '../common/header/store'

const rootReducer = combineReducers({
  header: headReducer
})

export default rootReducer;