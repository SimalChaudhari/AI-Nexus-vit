import React from 'react'

import { Helmet } from 'react-helmet-async'

import RegisterSection from '../../sections/auth/register'

const metadata = { title: `Register | AI Nexus` }

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <RegisterSection />
    </>
  )
}

export default RegisterPage

