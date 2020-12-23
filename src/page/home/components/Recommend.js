import React from 'react'
import { RecommondWrapper, RecommendItem } from '../style'
import {connect} from 'react-redux'
class Recommend extends React.Component {
  render() {
    const { recommendArr } = this.props
    return (
      <div>
        <RecommondWrapper>
          {
            recommendArr.map((item, index) => {
              return (
                <RecommendItem key={index}>
                  <a>
                    <img src={item.src}/>
                  </a>
                </RecommendItem>
              )
            })
          }
        </RecommondWrapper>
      </div>)
  }
}
const mapStatus = (status) => {
  return {
    recommendArr: status.home.recommendArr
  }
}
export default connect(mapStatus,null)(Recommend)