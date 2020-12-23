import axios from 'axios'
import {GETHOMEDATA,ADDHOMELIST,CHANGESHOWSCROLL} from './actionTypes'
function getHomeData(data){
  return {
    type:GETHOMEDATA,
    listArr:data.listArr,
    recommendArr:data.recommendArr
  }
}
function addHomeList(data,page){
  return {
    type:ADDHOMELIST,
    listArr:data,
    page
  }
}

export function changeHomeReducer(){
  return function(dispatch){
    axios.get('/api/home.json').then(res => {
      dispatch(getHomeData(res.data.data));
    })
  }
}
export function addMore(page){
  return function(dispatch){
    axios.get('/api/addHomeList.json?page=' + page).then(res => {
      dispatch(addHomeList(res.data.data,page + 1))
    })
  }
}

export function isShowTop(value){
  return {
    type:CHANGESHOWSCROLL,
    value
  }
}