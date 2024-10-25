import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboardh/EmployeeDashboard'
import AdminDashboard from './components/Dashboardh/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext); //this data is brought from AuthProvider.jsx

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const currentEmployee = authData.employees.find((e) => email == e.email && password == e.password);
      if (currentEmployee) { //if there's data inside currentEmployee set current user to employee and 
        setUser('employee'); //set loggedInUser in local storage with below properties
        setLoggedInUserData(currentEmployee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: currentEmployee}));
      }
    } else {
      alert("Invalid Credentials");
    }
  }




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''} {/* if there's user is not there then render Login page else let it be */}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)} {/* if user logged in is admin then render the admin dashboard, render the employee dashboard otherwise */}
    </>
  )
}

export default App
