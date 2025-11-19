import React from 'react'
import { Helmet } from 'react-helmet-async'
import ResetPasswordSection from '../../sections/auth/reset-password'

const metadata = { title: `Reset Password | AI Nexus` }

const ResetPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <ResetPasswordSection />
    </>
  )
}

export default ResetPasswordPage

