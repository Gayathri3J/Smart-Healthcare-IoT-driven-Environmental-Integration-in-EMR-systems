// src/pages/Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHospital, FaUser, FaLock } from 'react-icons/fa'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = username.trim().toLowerCase()
    // Dummy auto-detection based on the username entered
    if (user === 'admin') {
      navigate('/admin')
    } else if (user === 'nurse') {
      navigate('/nurse')
    } else if (user === 'doctor') {
      navigate('/doctor')
    } else {
      alert('Invalid username. Please use "admin", "nurse", or "doctor".')
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-teal-400 animate-fadeIn font-sans">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96">
        <div className="flex flex-col items-center mb-6">
          <FaHospital size={48} className="text-green-600 mb-2" />
          <h2 className="text-3xl font-bold text-gray-800">HealthCare Portal</h2>
          <p className="text-sm text-gray-600">Access hospital services with ease</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username (admin, nurse, doctor)"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition transform hover:scale-105"
          >
            Login
          </button>
        </form>
    
      </div>
    </div>
  )
}

export default Login
