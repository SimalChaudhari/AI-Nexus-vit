import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CommonContainer, DiscoverDetailSection } from '../../components'

const metadata = { title: `Community Details | AI Nexus` }

function CommunityDetailPage() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <CommonContainer>
        <DiscoverDetailSection />
      </CommonContainer>
    </>
  )
}

export default CommunityDetailPage

