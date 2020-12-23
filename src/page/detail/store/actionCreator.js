import axios from 'axios'
import {GETDETAILDATA} from './actionTypes'

const getDetailData = (data) => {
  return {
    type:GETDETAILDATA,
    data
  }
}
export const changeDetailData = () => {
  return (dispatch) => {
    axios.get('/api/detailPage.json').then( res => {
      dispatch(getDetailData(res.data.data))
    })
  }
}