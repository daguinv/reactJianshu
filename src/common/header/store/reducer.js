import {CHANGEFOCUS,CHANGEbLUE,INFOHOTDATA,CHANGEPAGE,MOUSENTER,MOUSELEAVE} from './actionTypes'

const defaultState = {
  isFocus:false,
  isEnter:false,
  infoHotList :[],
  currentPage:0,
  totalPage:1
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
        infoHotList:action.data,
        totalPage:action.totalPage
      }
    case CHANGEPAGE:
      let currentPage = state.currentPage;
      if(state.currentPage == state.totalPage - 1){
        currentPage = 0;
      }else{
        currentPage = currentPage + 1
      }
      return {
        ...state,
        currentPage
      }
    case MOUSENTER:
      return {
        ...state,
        isEnter:true
      }
    case MOUSELEAVE:
      return {
        ...state,
        isEnter:false
      }
    default:
      return state;
  } 
}