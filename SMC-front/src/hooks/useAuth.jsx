import { useState } from "react";
import { useContext, createContext } from "react";

const AuthenticationContext = createContext(null)

export const AuthenticationProvider = ( {user, children}) => {

    const [authData,setAuthData] = useState(user)

    // custom function, where we set data to local storage
    const setAuth = newUser => {
        if (newUser) {
            localStorage.setItem('smc-user', JSON.stringify(newUser)) 
        } else {
            localStorage.removeItem('smc-user') 
        }

        setAuthData(newUser)

    }

    return (
        <AuthenticationContext.Provider value={{authData,setAuth}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuth = () => useContext(AuthenticationContext)