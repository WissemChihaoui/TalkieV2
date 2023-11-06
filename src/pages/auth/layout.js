import React from 'react'
import Spline from '@splinetool/react-spline';
import Login from './login/login';
import Register from './register/Register';
import { Link, Route, Switch } from 'react-router-dom';
import SetDetails from './setDetails/SetDetails';
import ForgotAccess from './ForgotAccess/ForgotAccess';
import OddCode from './OddCode/OddCode';
import ResetPassword from './ResetPassword/ResetPassword';
const AuthLayout = () => {
  return (
    <div className="m-0 font-sans antialiased font-normal bg-bg text-start text-base leading-default text-slate-500 h-[100vh]">
    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
    
      <section>
        <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover  min-h-screen">
          <div className="container z-10">
            <div className="flex flex-wrap mt-0 -mx-3">
            <Switch>
  <Route path="/auth/login">
    <Login />
  </Route>
  <Route path="/auth/register">
    <Register />
  </Route>
  <Route path="/auth/set-details">
    <SetDetails />
  </Route>
  <Route path="/auth/forgot-password">
    <ForgotAccess />
  </Route>
  <Route path="/auth/odd-code">
    <OddCode />
  </Route>
  <Route path="/auth/reset-password">
    <ResetPassword />
  </Route>
</Switch>
            <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                  <div className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10">
                  <Spline scene="https://prod.spline.design/xFzIGbs7H3SQcibp/scene.splinecode" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AuthLayout