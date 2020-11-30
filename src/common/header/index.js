import React from 'react';
import * as All from './style'
import logoPic from '../../static/img/logo.png'
import { HeaderWrapper, Logo, Container, Item, Search, A, SearchWrapper, SearchTips, InfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.pageRef = React.createRef();
  }
  // 显示搜索下拉
  searchInfo(show) {
    const {changeInfoPage,infoHotList,currentPage,mouseEnter,mouseLeave,isEnter} = this.props;
    const showList = [];
    if(infoHotList && infoHotList.length > 0){
      let len = infoHotList.length -  (currentPage * 10);
      let length  = len < 10 ? len : 10;
      for(let i = currentPage * 10; i < currentPage * 10 + length; i++){
        showList.push(<InfoItem key={i}>{infoHotList[i]}</InfoItem>)
      }
    }
    if (show || isEnter) {
      return (
      <SearchTips onMouseEnter={mouseEnter} >
        <div className="title">热门搜索</div>
        <span className="iconfont" onClick={() => {changeInfoPage(this.pageRef.current)}} ref={this.pageRef}>&#xe648;</span>
        <ul>{showList}</ul>
      </SearchTips>)
    }else{
      return null;
    }
  }
  render() {
    const {isFocus,infoHotList,changeFocus,changeBlur} = this.props;
    return (
      <HeaderWrapper>
        <Logo href="/">
          <img src={logoPic} />
        </Logo>
        <Container className="left">
          <Item>
            <A active href="/">首页</A>
          </Item>
          <Item>
            <A>下载App</A>
          </Item>
          <Item>
            <SearchWrapper>
              <CSSTransition
                in={isFocus}
                timeout={300}
                classNames="slide">
                <Search
                  type="text"
                  className={isFocus ? 'extension' : ''}
                  onFocus={() => {changeFocus(infoHotList)}}
                  onBlur={changeBlur}
                />
              </CSSTransition>
              <span className={isFocus ? 'extension iconfont' : 'iconfont'}>&#xe602;</span>
              {this.searchInfo(isFocus)}
            </SearchWrapper>
          </Item>
        </Container>
        <Container className="right">
          <Item>
            <A><span className="iconfont">&#xe600;</span></A>
          </Item>
          <Item><A className="tone"><span className="iconfont">&#xe601;</span></A></Item>
          <Item><A>登录</A></Item>
          <Item><A className="btn">注册</A></Item>
          <Item><A className="btn" active>
            <span className="iconfont">&#xe605;</span>
            写文章</A></Item>
        </Container>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isFocus: state.header.isFocus,
    isEnter:state.header.isEnter,
    infoHotList:state.header.infoHotList,
    currentPage:state.header.currentPage,
    totalPage:state.header.totalPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeFocus: (infoHotList) => {
      dispatch(actionCreator.changeFocus());
      if(infoHotList.length  == 0)
      dispatch(actionCreator.getInfoData());
    },
    changeBlur: () => {
      dispatch(actionCreator.changeBlur())
    },
    mouseEnter: () => {
      dispatch(actionCreator.mouseEnter())
    },
    mouseLeave:() => {
      dispatch(actionCreator.mouseLeave())      
    },
    changeInfoPage: (dom) => {
      let deg = dom.style.transform.replace(/[^0-9]/ig,"");
      deg = Number(deg)
      dom.style.transform =`rotate(${deg + 360}deg)`
      dispatch(actionCreator.changePage())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);