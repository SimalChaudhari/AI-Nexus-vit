import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CommonContainer, DiscoverSection } from '../../components'

const metadata = { title: `Communities | AI Nexus` }

function CommunitiesPage() {
    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
            </Helmet>
            <CommonContainer>
                <DiscoverSection />
            </CommonContainer>
        </>
    )
}

export default CommunitiesPage

