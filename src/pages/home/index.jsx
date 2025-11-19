import React from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroSection, CardsSection, CounterSection, CommunitiesSection, JoinSection } from '../../components'

const metadata = { title: `Home | AI Nexus` }

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <HeroSection />
      <CardsSection />
      <CounterSection />
      <CommunitiesSection />
      <JoinSection />
    </>
  )
}

export default HomePage
