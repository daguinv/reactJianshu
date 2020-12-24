import react from 'react'
import {connect} from 'react-redux'
import {LoginWrapper,LoginMain,LoginInput,LoginButton} from './style'
import {changeLogin} from './store/actionCreator'
import {Redirect} from 'react-router-dom'

class Login extends react.Component{
  constructor(props){
    super(props)
    this.inputAdmin = react.createRef()
    this.inputPassWord = react.createRef()
  }
  render(){
    const {isLogin} = this.props
    if(isLogin){
      return <Redirect to="/"></Redirect>
    }else{
      return (
        <LoginWrapper>
          <LoginMain>
            <LoginInput placeholder="账号" ref={this.inputAdmin}></LoginInput>
            <LoginInput placeholder="密码" type="password" ref={this.inputPassWord}></LoginInput>
            <LoginButton onClick={() => {this.props.handleClick(this.inputAdmin,this.inputPassWord)}}>登录</LoginButton>
          </LoginMain>
        </LoginWrapper>
      )
    }
  }
}
const mapState = (state) => {
  return {
    isLogin:state.login.isLogin
  }
}

const mapdisPatch = (dispatch) => {
  return{
    handleClick:(admin,password) => {
      let user = admin.current.value
      let pass = password.current.value
      dispatch(changeLogin())
    }
  }
}
export default connect(mapState,mapdisPatch)(Login)