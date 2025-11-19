import { FiPlus } from 'react-icons/fi'
import { CommonGradientButton } from '../../components'

const WorkflowAutomation = () => {
  return (
    <div className="text-center mb-8 md:mb-12 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
        AI Workflow Automation
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
        Streamline your community management with intelligent workflows. Automate member onboarding, content curation, engagement tracking, and more with our visual workflow builder.
      </p>
      <div className="flex justify-center">
        <CommonGradientButton
          icon={<FiPlus />}
          iconPosition="left"
          size="md"
          className="w-full sm:w-auto"
        >
          Create New Workflow
        </CommonGradientButton>
      </div>
    </div>
  )
}

export default WorkflowAutomation

