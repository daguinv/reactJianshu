import { combineReducers } from 'redux';
import { headReducer } from '../common/header/store'
import {homeListRedcer} from '../page/home/store'
import {detailReducer} from '../page/detail/store'
import {LoginReducer} from '../page/login/store'
const rootReducer = combineReducers({
  header: headReducer,
  home:homeListRedcer,
  detail:detailReducer,
  login:LoginReducer
})

export default rootReducer;