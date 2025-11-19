import React from 'react'
import { Helmet } from 'react-helmet-async'
import LoginSection from '../../sections/auth/login'

const metadata = { title: `Login | AI Nexus` }

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <LoginSection />
    </>
  )
}

export default LoginPage

