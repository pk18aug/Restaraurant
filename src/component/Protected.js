import React from 'react'
import { Redirect,Route } from 'react-router-dom'
export default function Protected({Component:Cmp,...rest}) {
  <Route 
  {...rest}
  render={(props)=>{
    localStorage.getItem('login')?(
        <Cmp {...props} />
    ): <Redirect to="/login" />
  }}
  />
}
