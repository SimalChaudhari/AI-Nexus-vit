import { useState } from 'react'
import { RouterLink, InputComponent, CommonButton } from '../../components'

const ResetPasswordSection = () => {
  const [formState, setFormState] = useState({
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
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
      password: '',
      confirmPassword: '',
    }

    // Validate password
    if (!formState.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formState.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    // Validate confirm password
    if (!formState.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formState.password !== formState.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return !newErrors.password && !newErrors.confirmPassword
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      // TODO: hook into real auth API
      console.log('Reset password submit', formState)
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-3xl border border-primaryPalette-100/40 bg-secondaryPalette-50/90 p-10 shadow-xl shadow-primaryPalette-100/20">
        <h1 className="text-center text-2xl font-semibold uppercase tracking-[0.3em] text-primaryPalette-200">
          Reset Password
        </h1>
        <p className="mt-4 text-center text-sm text-primaryPalette-50">
          Enter your new password below to reset your account password.
        </p>

        <form className="mt-10 space-y-6" onSubmit={onSubmit}>
          <InputComponent
            label="New Password"
            name="password"
            type="password"
            value={formState.password}
            onChange={onChange}
            error={!!errors.password}
            helperText={errors.password}
          />

          <InputComponent
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formState.confirmPassword}
            onChange={onChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />

          <CommonButton type="submit" fullWidth className="">
            Reset Password
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

export default ResetPasswordSection

