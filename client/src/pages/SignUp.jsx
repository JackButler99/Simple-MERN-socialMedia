import {useState} from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [data, setData] = useState({ 
    firstName: "",
    lastName: "",
    email: "", 
    password: "",
    dateBirth:""
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = ({ currentTarget: input}) => {
    setData({...data, [input.name]: input.value}) 
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5005/api/users"
      const {data: res} = await axios.post(url, data)
      navigate("/login")
      console.log(res.message)
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="w-5/5 h-full flex rounded-xl shadow-[15px_10px_40px_10px_rgba(0,0,0,0.3)]" >
        <div className="flex w-2/5 flex-col items-center justify-center bg-[rgb(59,177,155)] rounded-lg">
          <h1 className="p-3 mt-0 text-white self-center font-bold text-2xl ">Welcome Back,</h1>
          <Link to="/login">
            <button type="button" className='border-none outline-none px-4 py-2 bg-white rounded-lg font-bold m-4' >
              Login
            </button>
          </Link>
        </div >
        <div className="p-2 pr-14 w-3/5 flex flex-col items-center content-center bg-white rounded-xl">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold pl-0 p-4 ml-2 mt-1 mr-4 mb-3 ">Create Account</h1>
            <input 
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className='shadow-md outline-none border-none w-full p-2 rounded-lg bg-[#edf5f3]  ml-4 my-2 '
            />
            <input 
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className='shadow-md outline-none border-none w-full p-2 rounded-lg bg-[#edf5f3] ml-4 my-2 '
            />
            <div className="shadow-md outline-none border-none w-full p-2 rounded-lg bg-[#edf5f3] ml-4 my-2 ">
            <div  className="text-gray-400">Date of Birth: </div>
            <input 
              type="date"
              placeholder="Date of Birth"
              name="dateBirth"
              onChange={handleChange}
              value={data.dateBirth}
              required
              className='bg-[#edf5f3]'
            />
            </div>
            
            <input 
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className='shadow-md outline-none border-none w-full p-2 rounded-lg bg-[#edf5f3] ml-4 my-2'
            />
            <input 
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className='shadow-md outline-none border-none w-full p-2 rounded-lg bg-[#edf5f3] ml-4 my-2 '
            />
            {error && <div className='w-11/12 p-4 m-1 text-sm bg-[#f34646] text-white rounded-lg'>{error}</div>}
						<button type="submit" className='ml-0 mr-12 shadow-lg border-none oufullne-none  outline-none px-4 py-2 bg-[#3bb19b] text-white rounded-lg font-bold m-4 '>
							Sign Up
						</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default SignUp;