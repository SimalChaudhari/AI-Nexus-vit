import { useState } from 'react'
import { RouterLink, InputComponent, CommonButton } from '../../components'

const RegisterSection = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
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
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    }

    // Validate First Name
    if (!formState.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    // Validate Last Name
    if (!formState.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    // Validate Email
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate Phone
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formState.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    // Validate Password
    if (!formState.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formState.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return !newErrors.firstName && !newErrors.lastName && !newErrors.email && !newErrors.phone && !newErrors.password
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      // TODO: hook into real auth API
      console.log('Register submit', formState)
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-3xl border border-primaryPalette-100/40 bg-secondaryPalette-50/90 p-10 shadow-xl shadow-primaryPalette-100/20">
        <h1 className="text-left text-2xl font-semibold text-primaryPalette-200">
          Create Account
        </h1>

        <form className="mt-10 space-y-6" onSubmit={onSubmit}>
          <InputComponent
            label="First Name"
            name="firstName"
            type="text"
            value={formState.firstName}
            onChange={onChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />

          <InputComponent
            label="Last Name"
            name="lastName"
            type="text"
            value={formState.lastName}
            onChange={onChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />

          <InputComponent
            label="Email"
            name="email"
            type="email"
            value={formState.email}
            onChange={onChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          <InputComponent
            label="Phone No."
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={onChange}
            error={!!errors.phone}
            helperText={errors.phone}
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

          <CommonButton type="submit" fullWidth className="">
            Create
          </CommonButton>
        </form>

        <p className="mt-6 text-center text-sm text-primaryPalette-50">
          Already have an account?{' '}
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

export default RegisterSection

