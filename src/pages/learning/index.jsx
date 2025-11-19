import React from 'react'
import { Helmet } from 'react-helmet-async'
import { TopBar, MainSection } from '../../components'

const metadata = { title: `Learning | AI Nexus` }

function LearningPage() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <TopBar />
      <MainSection />
    </>
  )
}

export default LearningPage