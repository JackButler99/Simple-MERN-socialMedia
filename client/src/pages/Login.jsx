import {useState} from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const {user, logIn} = UserAuth() 

  const [data, setData] = useState({ 
    email: "", 
    password: "",
  })
  const [error, setError] = useState("")
  
  const handleChange = ({ currentTarget: input}) => {
    setData({...data, [input.name]: input.value}) 
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await logIn(data)
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message)
      }
    }
  }

  if (user){
    return <Navigate to='/home' />
  }
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="w-4/5 h-full flex rounded-xl shadow-[15px_10px_40px_10px_rgba(0,0,0,0.3)]" >
        <div className="flex w-3/5 flex-col items-center justify-center bg-[#3bb19b] rounded-lg">
          <h1 className="p-4 mt-0 text-white self-center font-bold text-2xl ">Create new account ? </h1>
          <Link to="/signup">
            <button type="button" className='border-none oufullne-none px-4 py-2 bg-white rounded-lg font-bold m-4' >
              Sign Up
            </button>
          </Link>
        </div >
        <div className="p-2 pr-14 w-4/5 h-full flex flex-col items-center content-center bg-white rounded-xl">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold pl-2 p-4 ml-0 mt-1 mr-4 mb-3 ">Login to your account</h1>
            <input 
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className='shadow-md outline-none border-none w-full p-2 rounded-lg bg-[#edf5f3] my-2 '
            />
            <input 
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className='shadow-md outline-none border-none w-full p-2 rounded-lg bg-[#edf5f3] my-2 '
            />
            {error && <div className='w-11/12 p-4 m-1 text-sm bg-[#f34646] text-white rounded-lg'>{error}</div>}
						<button type="submit" className='ml-0 mr-10 shadow-lg border-none oufullne-none  outline-none px-4 py-2 bg-[#3bb19b] text-white rounded-lg font-bold  m-4 '>
							Log In
						</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Login;