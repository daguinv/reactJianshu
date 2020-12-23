import React from 'react'
import {HomeWrapper,HomeLeft,HomeRight,ScrollTop} from './style'
import List from './components/List'
import Fotter from './components/Fotter'
import Recommend from './components/Recommend'
import Write from './components/Write'
import {connect} from 'react-redux'
import {actionCreator} from './store'
// PureComponent内置了shouldComponentUpdate生命周期函数，因为我们所有的组件都和state做了链接connect，所以当state发生改变时，
// 所有的组件都将重新渲染，所以我们可以使用PureComponent来提高性能。但我们最好配合immutable.js配合，否则容易有坑
class Home extends React.PureComponent{
  render(){
    const {showScrollTop} = this.props
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <List></List>
            <Fotter></Fotter>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Write></Write>
          </HomeRight>
          {
            this.props.showScrollTop ? <ScrollTop onClick={this.activeTop()}>T</ScrollTop> : null
          }
          
        </HomeWrapper>
      </div>
    )
  }
  componentDidMount(){
    this.props.getHomeData()
    this.handleScroll();
  }
  // 添加滚动给到顶部动画
  activeTop(){
    // window.scrollTo(0,0);
    let timer = null;
    return function(){
      clearInterval(timer);
      timer = setInterval(() => {
        let dis = document.documentElement.scrollTop;
        if(dis == 0){
          clearInterval(timer);
        }else{
          window.scrollTo(0,dis - 20)
        }
      }, 3);
    }
    // clearInterval
  }
  handleScroll(){
    window.addEventListener('scroll',this.throttle(this.props.changeScrollTop,300))
  }
  // 滚动条节流
  throttle(fn,timeout){
    let timer = null;
    return function(...args){
      if(timer) return 
      timer = setTimeout(() => {
        fn.apply(null,args);
        timer = null
      }, timeout);
    }
  }
}


const mapState = state =>({
  showScrollTop:state.home.showScrollTop
})

const mapDispatch = dispatch => ({
  getHomeData: () => {
    dispatch(actionCreator.changeHomeReducer())
  },
  changeScrollTop:() => {
    let res = document.documentElement.scrollTop
    res > 400 ? dispatch(actionCreator.isShowTop(true)) : dispatch(actionCreator.isShowTop(false))
  }
})

export default connect(mapState,mapDispatch)(Home)