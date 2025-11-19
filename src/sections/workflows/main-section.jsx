import { useState } from 'react'
import { Templates, MyWorkflows } from '../../components'

const WorkflowMainSection = () => {
  const [activeTab, setActiveTab] = useState('templates') // 'templates' or 'workflows'

  return (
    <div>
      {/* Tab Switcher */}
      <div className="flex justify-center mb-6 md:mb-8 px-4">
        <div className="bg-white/90 backdrop-blur-sm md:rounded-full rounded-lg p-1 shadow-lg border border-white/20 flex sm:flex-row flex-col gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('templates')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:rounded-full rounded-lg font-medium transition-all text-sm sm:text-base ${
              activeTab === 'templates'
                ? 'bg-blue-600 text-white shadow-sm hover:cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Templates
          </button>
          <button
            onClick={() => setActiveTab('workflows')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:rounded-full rounded-lg font-medium transition-all text-sm sm:text-base ${
              activeTab === 'workflows'
                ? 'bg-blue-600 text-white shadow-sm hover:cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            My Workflows
          </button>
        </div>
      </div>

      {/* Templates View */}
      {activeTab === 'templates' && <Templates />}

      {/* My Workflows View */}
      {activeTab === 'workflows' && <MyWorkflows />}
    </div>
  )
}

export default WorkflowMainSection

