import React from 'react'
import { Helmet } from 'react-helmet-async'
import ForgotPasswordSection from '../../sections/auth/forgot-password'

const metadata = { title: `Forgot Password | AI Nexus` }

const ForgotPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <ForgotPasswordSection />
    </>
  )
}

export default ForgotPasswordPage

