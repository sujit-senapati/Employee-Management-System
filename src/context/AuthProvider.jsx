import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null); 

    useEffect(() => {
        setLocalStorage();
        const {employees, admin} = getLocalStorage(); //this is used so this snippet runs in background
        setUserData({employees, admin});
    }, [])
    

    return (
        <div>
            {/* passing userData with useEffect to it's children(App.jsx) */}
            <AuthContext.Provider value={userData}> 
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
