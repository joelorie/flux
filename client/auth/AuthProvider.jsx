import { useContext, createContext, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null)
  const [role, setRole] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const registerUser = async (userData) => {
    try {
      const url =
        import.meta.env.VITE_APP_ENVIRONMENT === 'development'
          ? 'http://localhost:3000/api/auth/signup'
          : `${import.meta.env.VITE_APP_BACKEND_URL}/api/auth/signup`

      const res = await axios.post(url, userData)
      return res.status
    } catch (error) {
      return error.response?.status || 500
    }
  }

  const loginUser = async (userData) => {
    try {
      const url =
        import.meta.env.VITE_APP_ENVIRONMENT === 'development'
          ? 'http://localhost:3000/api/auth/login'
          : `${import.meta.env.VITE_APP_BACKEND_URL}/api/auth/login`

      const response = await axios.post(url, userData)
      const res = response.data

      if (res) {
        setUserName(res.user.name)
        setRole(res.user.role)
        setToken(res.token)
        localStorage.setItem('token', res.token)

        return response.status
      }
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message)
      return err.response?.status || 500
    }
  }

  const forgotPassword = async (userData) => {
    const res = await fetch(
      import.meta.env.VITE_APP_ENVIRONMENT == 'development'
        ? '/api/api/auth/forgot-password'
        : `${import.meta.env.VITE_APP_BACKEND_URL}/api/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      },
    )
    return res.status
  }

  const resetPassword = async (userData, token) => {
    const res = await fetch(
      import.meta.env.VITE_APP_ENVIRONMENT == 'development'
        ? `/api/api/auth/reset-password/${token}`
        : `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/api/auth/reset-password/${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      },
    )
    return res.status
  }

  const logout = () => {
    setUserName(null)
    setRole(null)
    setToken('')
    localStorage.removeItem('token')
    return 0
  }

  const getUserProfile = async () => {
    const res = await fetch(
      import.meta.env.VITE_APP_ENVIRONMENT == 'development'
        ? '/api/api/users/get-profile'
        : `${import.meta.env.VITE_APP_BACKEND_URL}/api/users/get-profile`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const data = await res.json()
    return data
  }

  const editUserProfile = async (userData) => {
    const res = await fetch(
      import.meta.env.VITE_APP_ENVIRONMENT == 'development'
        ? '/api/api/users/edit-profile'
        : `${import.meta.env.VITE_APP_BACKEND_URL}/api/users/edit-profile`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      },
    )
    setUserName(userData.name)
    return res.status
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        userName,
        role,
        registerUser,
        loginUser,
        forgotPassword,
        resetPassword,
        logout,
        getUserProfile,
        editUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
