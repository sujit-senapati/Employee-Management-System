import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboardh/EmployeeDashboard'
import AdminDashboard from './components/Dashboardh/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
    } else if (email == 'user@me.com' && password == '123') {
      setUser('employee');
    } else {
      alert("Invalid Credentials");
    }
  }


  const data = useContext(AuthContext);
  console.log(data)

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''} {/* if there's user is not there then render Login page else let it be */}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />} {/* if user logged in is admin then render the admin dashboard, render the employee dashboard otherwise */}
    </>
  )
}

export default App
