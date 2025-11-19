import { useState } from 'react'
import { RouterLink, InputComponent, CommonButton } from '../../components'

const ForgotPasswordSection = () => {
  const [formState, setFormState] = useState({
    email: '',
  })

  const [errors, setErrors] = useState({
    email: '',
  })

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
    }

    // Validate email (email or phone)
    if (!formState.email.trim()) {
      newErrors.email = 'Email or phone is required'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formState.email) && !/^[0-9]{10}$/.test(formState.email.replace(/\s+/g, ''))) {
      newErrors.email = 'Please enter a valid email or phone number'
    }

    setErrors(newErrors)
    return !newErrors.email
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      // TODO: hook into real auth API
      console.log('Forgot password submit', formState)
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-3xl border border-primaryPalette-100/40 bg-secondaryPalette-50/90 p-10 shadow-xl shadow-primaryPalette-100/20">
        <h1 className="text-center text-2xl font-semibold uppercase tracking-[0.3em] text-primaryPalette-200">
          Forgot Password
        </h1>
        <p className="mt-4 text-center text-sm text-primaryPalette-50">
          Enter your email or phone number and we'll send you a link to reset your password.
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

          <CommonButton type="submit" fullWidth className="">
            Send Reset Link
          </CommonButton>
        </form>

        <p className="mt-6 text-center text-sm text-primaryPalette-50">
          Remember your password?{' '}
          <RouterLink
            to="/login"
            className="font-semibold text-primaryPalette-100 transition hover:text-primaryPalette-50 hover:underline"
          >
            Login
          </RouterLink>
        </p>
      </div>
    </section>
  )
}

export default ForgotPasswordSection

