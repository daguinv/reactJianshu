import {GETHOMEDATA,ADDHOMELIST,CHANGESHOWSCROLL} from './actionTypes'
const defaultStatus = {
  listArr:[],
  recommendArr:[],
  page:1,
  showScrollTop:false
}

export default function(state = defaultStatus,action){
  switch(action.type){
    case GETHOMEDATA: 
      return {
        ...state,
        listArr :action.listArr,
        recommendArr:action.recommendArr
      }
    case ADDHOMELIST:
      let listArr = state.listArr.concat(action.listArr);
      return {
        ...state,
        listArr,
        page:action.page
      }
    case CHANGESHOWSCROLL:
      return {
        ...state,
        showScrollTop:action.value
      }
  }
  return state
}