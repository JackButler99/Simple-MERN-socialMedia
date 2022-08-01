import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom"

import decode from 'jwt-decode'
const AuthContext = createContext()

export function AuthContextProvider ({ children }) {
  const [user, setUser] = useState(localStorage.getItem('token')?.user)
  const location = useLocation()

  const API = axios.create({ baseURL: 'http://localhost:5005/api' })
    API.interceptors.request.use((req)=>{
      if (localStorage.getItem('token')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
      }
      return req
    })
  
  const logIn = async (data) => {     
    const { data: res } = await API.post('/auth', data);
    
    localStorage.setItem("token", JSON.stringify(res.data))
    const token = localStorage.getItem('token')
    
    window.location = '/home'
    
    setUser(JSON.stringify(token.user))
      
      
     
    }   
   
  function logOut(){
    localStorage.removeItem("token")
    setUser(null)
    window.location= '/'
    
  }

  useEffect(() => {
    const token = user ?.token
    if (token){
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) logOut()
    }
    console.log('user:', user) 
    console.log('token', localStorage.getItem('token'))
    setUser(JSON.parse(localStorage.getItem('token'))?.user)  
  }, [location])
  
  
  return (
    <AuthContext.Provider value = {{ logIn, logOut, user }} >
      {children}
    </AuthContext.Provider>
  )

}


export function UserAuth(){
  return useContext(AuthContext)
}