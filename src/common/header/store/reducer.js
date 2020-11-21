import {CHANGEFOCUS,CHANGEbLUE,INFOHOTDATA} from './actionTypes'

const defaultState = {
  isFocus:false,
  infoHotList :[]
}
export default function(state = defaultState,action){
  switch(action.type){
    case CHANGEFOCUS:
      return {
        ...state,
        isFocus:true
      }
    case CHANGEbLUE:
      return {
        ...state,
        isFocus:false
      }
    case INFOHOTDATA:
      return {
        ...state,
        infoHotList:action.data
      }
  }
  return state;
}