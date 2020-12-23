import {GETDETAILDATA} from './actionTypes'

const defaultStatus = {
  value:''
}


export default function(state = defaultStatus,action){
  switch(action.type){
    case GETDETAILDATA: 
      return {
        ...state,
        value:action.data
      }
  }
  return state
}