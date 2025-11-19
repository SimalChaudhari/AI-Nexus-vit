import React from 'react'
import { Helmet } from 'react-helmet-async'
import { PageNotFoundSection } from '../../components'

const metadata = { title: `Page Not Found | AI Nexus` }

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <PageNotFoundSection />
    </>
  )
}

export default NotFoundPage

