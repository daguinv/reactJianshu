import {CHANGEFOCUS,CHANGEbLUE,INFOHOTDATA} from './actionTypes'
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
    data
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

export {changeFocus,changeBlur,getInfoData}