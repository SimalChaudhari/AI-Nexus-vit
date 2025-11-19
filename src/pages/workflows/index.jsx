import React from 'react'
import { Helmet } from 'react-helmet-async'
import CommonContainer from '../../components/common/container/commonContainer'
import { WorkflowAutomation, WorkflowMainSection } from '../../components'

const metadata = { title: `Workflows | AI Nexus` }

function WorkflowsPage() {
    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
            </Helmet>
            <CommonContainer>
                <WorkflowAutomation />
                <WorkflowMainSection />
            </CommonContainer>
        </>
    )
}

export default WorkflowsPage

