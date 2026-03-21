import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../auth/AuthProvider'

const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('client')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newUser = {
      username: name,
      password,
      role,
      email,
    }

    const response = await auth.registerUser(newUser)
    if (response === 201) {
      toast.success('Account created successfully!')
      navigate('/login')
    } else {
      toast.error('Registration failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      {/* Main Card Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-base-100 rounded-3xl overflow-hidden shadow-2xl border border-base-300">
        {/* Left Side: Visual/Hero (Mirroring Login for Brand Consistency) */}
        <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden bg-primary text-primary-content">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-primary text-2xl font-bold">
                  bolt
                </span>
              </div>
              <span className="text-2xl font-black tracking-tighter">Flux</span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              Join the future of <br /> creative commerce.
            </h1>
            <p className="text-primary-content/80 text-lg max-w-md leading-relaxed">
              Whether you're looking to buy premium assets or sell your own
              creations, Flux is the place for you.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="text-sm font-medium opacity-90 mb-2 italic">
              "The fastest growing marketplace for modern creators."
            </p>
            <div className="divider divider-horizontal"></div>
            <p className="text-xs opacity-70">
              © 2026 Flux Industries. All rights reserved.
            </p>
          </div>

          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-base-100">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-4xl font-black text-base-content mb-2">
                Create Account
              </h2>
              <p className="text-base-content/60">
                Start your journey with Flux today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Input */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs uppercase opacity-60">
                    Username
                  </span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg">
                    person
                  </span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered w-full pl-12 bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs uppercase opacity-60">
                    Email Address
                  </span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg">
                    mail
                  </span>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="input input-bordered w-full pl-12 bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Role Selector */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs uppercase opacity-60">
                    I want to
                  </span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg">
                    category
                  </span>
                  <select
                    className="select select-bordered w-full pl-12 bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all font-medium"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="client">Buy Products (Client)</option>
                    <option value="seller">Sell Products (Seller)</option>
                  </select>
                </div>
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs uppercase opacity-60">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg">
                    lock
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Min. 8 characters"
                    className="input input-bordered w-full px-12 bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn btn-primary w-full btn-lg rounded-xl shadow-xl shadow-primary/20 normal-case font-bold text-lg"
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm opacity-70">
                Already have an account?
                <Link
                  to="/login"
                  className="font-black text-primary hover:underline ml-1"
                >
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
