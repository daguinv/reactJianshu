import styled from 'styled-components';

const HeaderWrapper = styled.div`
  min-width:1200px;
  height:58px;
  border-bottom:1px solid #e7e7e7;
`
const Logo = styled.div`
  height:100%;
  display:inline-block;
  img{
    height:100%;
  }
`
const Container = styled.ul`
  height:100%;
  display:inline-block;
  &.left{
    margin-left:100px;
  }
  &.right{
    float:right;
  }
`
const Item = styled.li`
  float:left;
  height:100%;
  margin-right: 10px;
`

const A = styled.div`
  display:inline-block;
  height: 100%;
  line-height: 26px;
  padding: 15px;
  font-size:18px;
  text-align:center;
  box-sizing:border-box;
  color:${props => props.active ? "#ea6f5a" : "#333"};
  &.btn{
    margin: 9px 5px;
    display:inline-block;
    min-width: 100px;
    height: 40px;
    line-height: 5px;
    border-radius: 20px;
    font-size: 15px;
    border: 1px solid #ea6f5a;
    background: ${props => props.active ? "#ea6f5a" : "#fff"};
    color:${props => props.active ? "#fff" : "#ea6f5a"}
  }
  
  &.tone{
    color:#ea6f5a;
  }
`
const Span = styled.span`
  line-height: 26px;
  color: #333;
`
const SearchWrapper = styled.div`
  line-height:56px;
  position:relative;
  span{
    position:absolute;
    right:5px;
    top:12px;
    width:30px;
    line-height:30px;
    border-radius:50%;
    &.extension{
      background:#777;
      color:#fff;
    }
  }
`
const Search = styled.input.attrs({
  placeholder:'请输入搜索内容'
})`
  padding: 0 40px 0 20px;
  width:160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  outline:none;
  border-radius: 40px;
  background: #eee;
  box-sizing:border-box;
  &.extension{
    width:250px;
  }
  &.slide-enter {
    transition:all 0.3s ease-out;
  }
  &.slide-enter-active {
    width:250px;
  }
  &.slide-exit {
    transition:all 0.3s ease-out;
  }
  &.slide-exit-active {
    width:160px;
  }
  
`
const SearchTips = styled.div`
  position: absolute;
  margin-top: 3px;
  width: 250px;
  left: 0;
  top: 100%;
  border-radius: 4px;
  background-color:#fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  :before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
  .title{
    text-align:left;
    padding:10px;
    line-height:20px;
    font-size:14px;
    color:#969696;
  }
  span{
    top:8px;
    width:21px;
    height:27px;
    cursor: pointer;
    transition:all 0.2s ease-in;
    transform-origin: center;
  }
  ul{
    overflow:hidden;
    padding:0 10px;
  }
`
const InfoItem = styled.a`
  display:inline-block;
  padding:0 5px;
  margin-right:10px;
  margin-bottom:15px;
  font-size:12px;
  color:#787878;
  border:1px solid #ddd;
  border-radius:3px;
  line-height:20px;
  
`
export { HeaderWrapper, Logo, Container, Item, A, Search, SearchWrapper,SearchTips,InfoItem}