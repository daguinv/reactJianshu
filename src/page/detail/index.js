import React from 'react'
import { DetailWrapper, Title,Content } from './style'
import {connect} from 'react-redux'
import {actionCreator} from './store'

class Detail extends React.Component {
  render() {
    const {value} = this.props
    return (
      <DetailWrapper>
        <Title>{value.title}</Title>
        <Content dangerouslySetInnerHTML={{__html:value.content}}/>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetailData();
  }
}

const mapState = (state) => {
  return {
    value:state.detail.value
  }
}

const mapDispatch = dispatch => {
  return {
    getDetailData(){
      dispatch(actionCreator.changeDetailData())
    }
  }
}

export default connect(mapState,mapDispatch)(Detail)