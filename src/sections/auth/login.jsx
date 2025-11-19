import { useState } from 'react'
import { toast } from 'sonner'
import { RouterLink, InputComponent, CommonButton, useRouter } from '../../components'

const LoginSection = () => {
  const router = useRouter()
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  // Static credentials for demo
  const staticUsers = {
    'admin@admin.in': { password: 'Admin@123', role: 'Admin', name: 'Admin User' },
    'user@user.in': { password: 'User@123', role: 'User', name: 'Regular User' },
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setFormState((state) => ({ ...state, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
    }

    let firstError = null

    // Validate email (email or phone)
    if (!formState.email.trim()) {
      newErrors.email = 'Email or phone is required'
      if (!firstError) firstError = 'Email or phone is required'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formState.email) && !/^[0-9]{10}$/.test(formState.email.replace(/\s+/g, ''))) {
      newErrors.email = 'Please enter a valid email or phone number'
      if (!firstError) firstError = 'Please enter a valid email or phone number'
    }

    // Validate password
    if (!formState.password.trim()) {
      newErrors.password = 'Password is required'
      if (!firstError) firstError = 'Password is required'
    } else if (formState.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
      if (!firstError) firstError = 'Password must be at least 6 characters'
    }

    if (firstError) {
      toast.warning('Validation Error', {
        description: firstError,
      })
    }

    setErrors(newErrors)
    return !newErrors.email && !newErrors.password
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    setErrors({ email: '', password: '' })

    // Static login - no API call
    const user = staticUsers[formState.email.toLowerCase()]

    if (user && user.password === formState.password) {
      // Mock token
      const mockToken = 'mock_access_token_' + Date.now()
      
      // Store in localStorage
      localStorage.setItem('access_token', mockToken)
      localStorage.setItem('role', user.role)
      localStorage.setItem('user', JSON.stringify({ 
        name: user.name, 
        email: formState.email,
        role: user.role 
      }))

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('roleChange'))
      }

      toast.success(`Welcome back, ${user.name}!`)
      
      setTimeout(() => {
        if (user.role === 'Admin') {
          router.push('/admin')
        } else {
          router.push('/')
        }
      }, 500)
    } else {
      toast.error('Invalid credentials', {
        description: 'Please check your email and password.',
      })
      setErrors({
        email: 'Invalid email or password',
        password: '',
      })
    }

    setLoading(false)
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-primaryPalette-100/40 bg-secondaryPalette-50/90 p-10 shadow-xl shadow-primaryPalette-100/20">
        <h1 className="text-center text-2xl font-semibold uppercase tracking-[0.3em] text-primaryPalette-200">
          Account Login
        </h1>
        <p className="mt-4 text-center text-sm text-primaryPalette-50">
          Sign in with your email or phone number to continue managing your Gudworld experience.
        </p>

        <form className="mt-10 space-y-6" onSubmit={onSubmit}>
          <InputComponent
            label="Email or Phone"
            name="email"
            type="text"
            value={formState.email}
            onChange={onChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          <InputComponent
            label="Password"
            name="password"
            type="password"
            value={formState.password}
            onChange={onChange}
            error={!!errors.password}
            helperText={errors.password}
          />

          <div className="flex justify-end">
            <RouterLink
              to="/forgot-password"
              className="text-sm font-semibold text-primaryPalette-100 transition hover:text-primaryPalette-50 hover:underline"
            >
              Forgot Password?
            </RouterLink>
          </div>

          <CommonButton type="submit" fullWidth className="" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </CommonButton>
        </form>

        <p className="mt-6 text-center text-sm text-primaryPalette-50">
          Don't have an account?{' '}
          <RouterLink
            to="/register"
            className="font-semibold text-primaryPalette-100 transition hover:text-primaryPalette-50 hover:underline"
          >
            Create Account
          </RouterLink>
        </p>
      </div>

      <div className="mt-8 w-full max-w-md rounded-2xl border border-primaryPalette-100/40 bg-secondaryPalette-50/70 p-5 text-sm text-primaryPalette-200 shadow-inner shadow-primaryPalette-100/30">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-primaryPalette-50">
          Development Credentials
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex flex-col rounded-xl bg-secondaryPalette-50/90 px-4 py-3 shadow-sm shadow-primaryPalette-100/30 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primaryPalette-50">
              Admin
            </span>
            <span className="text-sm font-semibold text-primaryPalette-200">
              admin@admin.in / Admin@123
            </span>
          </div>

          <div className="flex flex-col rounded-xl bg-secondaryPalette-50/90 px-4 py-3 shadow-sm shadow-primaryPalette-100/30 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primaryPalette-50">
              User
            </span>
            <span className="text-sm font-semibold text-primaryPalette-200">
              user@user.in / User@123
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginSection

