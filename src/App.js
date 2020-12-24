import React from 'react';
import { Globalstyle } from './style'
import { GlobalFont } from './static/font'
import Header from './common/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './page/home'
// import Detail from './page/detail'
import Login from './page/login'
import Detail from './page/detail/loadable'

function App() {
  return (
    <React.Fragment>
      <Globalstyle />
      <GlobalFont />
      <BrowserRouter>
        <div>
          <Header></Header>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail/:id" exact>
            <Detail />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </div>
      </BrowserRouter>

    </React.Fragment>
  )
}
export default App;