import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../auth/AuthProvider'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await auth.loginUser({ email, password })

    if (response === 200) {
      toast.success('Welcome back to Flux!')
      navigate('/')
    } else {
      toast.error('Invalid Credentials. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      {/* Main Card Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-base-100 rounded-3xl overflow-hidden shadow-2xl border border-base-300">
        {/* Left Side: Visual/Hero (Hidden on mobile) */}
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
              Master your workflow with speed and precision.
            </h1>
            <p className="text-primary-content/80 text-lg max-w-md leading-relaxed">
              Join thousands of professionals who use Flux to accelerate their
              creative output and stay organized.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <div className="avatar-group -space-x-4 mb-4">
              <div className="avatar border-primary">
                <div className="w-10">
                  <img src="https://i.pravatar.cc/100?u=1" />
                </div>
              </div>
              <div className="avatar border-primary">
                <div className="w-10">
                  <img src="https://i.pravatar.cc/100?u=2" />
                </div>
              </div>
              <div className="avatar border-primary">
                <div className="w-10">
                  <img src="https://i.pravatar.cc/100?u=3" />
                </div>
              </div>
              <div className="avatar placeholder border-primary">
                <div className="bg-neutral text-neutral-content w-10">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium opacity-90">
              Over 10k+ creators joined us this month.
            </p>
          </div>

          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="p-8 lg:p-16 flex flex-col justify-center bg-base-100">
          <div className="max-w-md mx-auto w-full">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-content">
                <span className="material-symbols-outlined text-xl">bolt</span>
              </div>
              <span className="text-xl font-black text-base-content">Flux</span>
            </div>

            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl font-black text-base-content mb-2">
                Welcome back
              </h2>
              <p className="text-base-content/60">
                Please enter your details to sign in.
              </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content gap-2 normal-case font-bold">
                <img
                  alt="Google"
                  className="w-5 h-5"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                />
                Google
              </button>
              <button className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content gap-2 normal-case font-bold">
                <img
                  alt="Apple"
                  className="w-5 h-5"
                  src="https://www.svgrepo.com/show/162625/apple-logo.svg"
                />
                Apple
              </button>
            </div>

            <div className="divider text-xs uppercase opacity-50 mb-8">
              Or continue with email
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold">Email Address</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    mail
                  </span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="input input-bordered w-full pl-12 bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-control">
                <div className="flex justify-between items-end mb-1">
                  <label className="label py-0">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    size="sm"
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    lock
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="input input-bordered w-full px-12 bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all"
                    required
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

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm rounded"
                  id="remember"
                />
                <label
                  htmlFor="remember"
                  className="text-sm opacity-70 cursor-pointer select-none"
                >
                  Keep me signed in
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full btn-lg rounded-xl shadow-xl shadow-primary/20 normal-case font-bold text-lg"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm opacity-70">
                Don't have an account?
                <Link
                  to="/signup"
                  className="font-black text-primary hover:underline ml-1"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
