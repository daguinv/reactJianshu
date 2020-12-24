import styled from 'styled-components'
export const LoginWrapper = styled.div`
  font-size: 14px;
  min-width: 900px;
  height: 100vh;
  background-color: #f1f1f1;
`
export const LoginMain= styled.div`
  width: 400px;
  height:400px;
  margin: 0 auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  box-sizing:border-box;
`
export const LoginInput = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  margin: 0 auto;
  box-sizing:border-box;
  outline:none;
`
export const LoginButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
`