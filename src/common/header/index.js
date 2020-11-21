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
  }
  // 显示搜索下拉
  searchInfo(show) {
    if (show) {
      return (<SearchTips>
        <div className="title">热门搜索</div>
        <span className="iconfont">&#xe648;</span>
        <ul>
          {
            this.props.infoHotList.map((item) =>{
              return <InfoItem key={item}>{item}</InfoItem>
            })
          }
        </ul>
      </SearchTips>)
    }else{
      return null;
    }
  }
  render() {
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
                in={this.props.isFocus}
                timeout={300}
                classNames="slide">
                <Search
                  type="text"
                  className={this.props.isFocus ? 'extension' : ''}
                  onFocus={this.props.changeFocus}
                  onBlur={this.props.changeBlur}
                // value={this.props.inputValue}
                />
              </CSSTransition>
              <span className={this.props.isFocus ? 'extension iconfont' : 'iconfont'}>&#xe602;</span>
              {this.searchInfo(this.props.isFocus)}
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
    infoHotList:state.header.infoHotList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeFocus: () => {
      dispatch(actionCreator.changeFocus());
      dispatch(actionCreator.getInfoData());
    },
    changeBlur: () => {
      dispatch(actionCreator.changeBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);