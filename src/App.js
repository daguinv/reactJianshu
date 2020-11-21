import React from 'react';
import { Globalstyle } from './style'
import {GlobalFont} from './static/font'
import Header from './common/header'

function App() {
  return (
    <React.Fragment>
      <Globalstyle />
      <GlobalFont/>
      <Header></Header>
    </React.Fragment>
  )
}
export default App;