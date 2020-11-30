import {CHANGEFOCUS,CHANGEbLUE,INFOHOTDATA,CHANGEPAGE,MOUSENTER,MOUSELEAVE} from './actionTypes'
import axios from 'axios';

function changeFocus(){
  return {
    type:CHANGEFOCUS,
    isFocus:true
  }
}
function changeBlur(){
  return {
    type:CHANGEbLUE,
    isFocus:false
  }
} 
function changeInfoList(data){
  return {
    type:INFOHOTDATA,
    data,
    totalPage:Math.ceil(data.length / 10)
  }
}
function getInfoData(){
  return function(dispatch){
    axios.get('/api/getHotData.json').then( (res) => {
      dispatch(changeInfoList(res.data.data))
    },() =>{
      console.log("error")
    })
  }
}
function mouseEnter(){
  return {
    type: MOUSENTER
  }
}
function mouseLeave(){
  return {
    type: MOUSELEAVE
  }
}
function changePage(){
  return {
    type:CHANGEPAGE
  }
}


export {changeFocus,changeBlur,getInfoData,changePage,mouseEnter,mouseLeave}