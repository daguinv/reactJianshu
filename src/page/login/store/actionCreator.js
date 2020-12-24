import axios from 'axios'
import {LOGINSTATE,LOGOUTSTATE} from './actionTypes'

const changeLoginState = () => {
  return {
    type:LOGINSTATE,
    data:true
  }
}

export const changeLogin = (user,password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?user=${user}&password=${password}`).then((res) => {
      dispatch(changeLoginState())
    })
  }
}

export const logoutState = () => {
  return {
    type:LOGOUTSTATE,
    data:false
  }
}