import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route path='/users' component={UserCrud} />
        <Route exact patch='/' component={Home} />
        <Redirect from='*' to='/' />
    </Switch>
