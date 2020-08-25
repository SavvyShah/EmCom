import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { AuthCheck } from 'reactfire'

import DashboardPage from './pages/DashboardPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.js'
import CompanyPage from './pages/CompanyPage.js'

export default (props) => (
  <BrowserRouter>
    <Switch>
      <AuthCheck fallback={<Redirect to="/login" />}>
        <Route
          exact
          path="/dashboard/:employee"
          component={<DashboardPage />}
        />
      </AuthCheck>
      <Route exact path="/company/:company" component={<CompanyPage />} />
      <Route exact path="/login" component={<LoginPage />} />
      <Route exact path="/" component={<HomePage />} />
    </Switch>
  </BrowserRouter>
)
