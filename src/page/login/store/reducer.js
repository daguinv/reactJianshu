import {LOGINSTATE,LOGOUTSTATE} from './actionTypes'

const defaultStatus = {
  isLogin: false,
}

export default function(state = defaultStatus,action){
  switch(action.type){
    case LOGINSTATE:
      return {
        ...state,
        isLogin:action.data
      }
    case LOGOUTSTATE:
        return {
          ...state,
          isLogin:action.data
        }
  }
  return state
}