import styled from 'styled-components';
export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  display:flex;
`
export const HomeLeft = styled.div`
  width:625px;
  margin-left:15px;
  padding-top:30px;
`

export const HomeRight = styled.div`
  width:280px;
  padding-left:40px;
  padding-top:30px;
`
export const ListItem = styled.div`
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  img{
    width: 150px;
    height: 100px;
    float:right;
    border-radius:4px;
  }
  .listInfo{
    width: 500px;
    padding-right:165px;
    h3{
      font-size:18px;
      margin-bottom:8px;
      font-weight:bold;
      color:#333;
    }
    p{
      font-size:13px;
      line-height:24px;
      color:#999;
    }
  }
`
export const AddMore = styled.div`
  height: 40px;
  line-height:40px;
  margin: 30px auto 60px;
  text-align: center;
  font-size: 15px;
  background-color: #a5a5a5;
  border-radius: 20px;
  cursor: pointer;
  box-sizing:border-box;
  color: #fff;
`

export const RecommondWrapper = styled.div`
  margin:30px 0;
`
export const RecommendItem = styled.div`
  margin-bottom:15px;
  height: 50px;
  a{
    display:block;
    img{
      width: 280px;
    }
  }
  
`
export const ScrollTop = styled.a`
  position:fixed;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  width: 50px;
  height: 50px;
  line-height:50px;
  text-align: center;
  bottom:30px;
  right:30px;
  color:darkcyan;
`