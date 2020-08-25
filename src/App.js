import React, { Suspense } from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import DashboardPage from './pages/DashboardPage.js'
import LoginPage from './pages/LoginPage.js'
import HomePage from './pages/HomePage.js'
import CompanyPage from './pages/CompanyPage.js'
import { AuthCheck } from 'reactfire'
import Signup from './pages/Signup.js'
import { Spinner } from 'react-bootstrap'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense
          fallback={
            <div className={styles.spinner}>
              <Spinner animation="grow" variant="primary" />
            </div>
          }
        >
          <AuthCheck fallback={<Redirect to="/login" />}>
            <Route exact path="/:employee">
              <DashboardPage />
            </Route>
          </AuthCheck>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          {/* <Route exact path="/company/:company">
            <CompanyPage />
          </Route> */}
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}
