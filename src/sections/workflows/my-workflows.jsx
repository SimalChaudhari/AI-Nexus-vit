import { useState } from 'react'
import {
  FiPlay,
  FiSettings,
  FiBarChart,
  FiClock,
  FiMoreHorizontal,
  FiFilter,
} from 'react-icons/fi'
import { CommonGradientButton, DropdownComponent } from '../../components'

const MyWorkflows = () => {
  const [selectedStatus, setSelectedStatus] = useState('All Status')

  const workflows = [
    {
      id: 1,
      title: 'New Member Welcome Sequence',
      description: 'Active workflow that welcomes new members and guides them through community introduction.',
      image: 'https://readdy.ai/api/search-image?query=Active%20welcome%20automation%20system%20with%20member%20onboarding%20flow%20and%20greeting%20interface%2C%20professional%20community%20management%20dashboard%20with%20real-time%20activity%20monitoring&width=400&height=250&seq=44&orientation=landscape',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      category: 'Onboarding',
      tags: ['Welcome', 'Active', 'Onboarding'],
      triggers: 1,
      actions: 5,
      runs: 47,
      lastRun: '2 hours ago',
    },
    {
      id: 2,
      title: 'Weekly Digest Generator',
      description: 'Automatically curates and sends weekly community highlights to all members every Sunday.',
      image: 'https://readdy.ai/api/search-image?query=Weekly%20digest%20automation%20with%20content%20curation%20and%20newsletter%20generation%2C%20professional%20content%20management%20system%20with%20automated%20publishing%20and%20member%20communication&width=400&height=250&seq=45&orientation=landscape',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      category: 'Content',
      tags: ['Digest', 'Weekly', 'Content'],
      triggers: 1,
      actions: 3,
      runs: 12,
      lastRun: '3 days ago',
    },
    {
      id: 3,
      title: 'Inactive Member Re-engagement',
      description: "Identifies and re-engages members who haven't been active for 30 days with personalized content.",
      image: 'https://readdy.ai/api/search-image?query=Member%20re-engagement%20system%20with%20activity%20tracking%20and%20personalized%20outreach%20campaigns%2C%20professional%20community%20analytics%20dashboard%20with%20member%20behavior%20insights&width=400&height=250&seq=46&orientation=landscape',
      status: 'Paused',
      statusColor: 'bg-yellow-100 text-yellow-800',
      category: 'Engagement',
      tags: ['Re-engagement', 'Inactive', 'Personalized'],
      triggers: 1,
      actions: 4,
      runs: 23,
      lastRun: '1 week ago',
    },
    {
      id: 4,
      title: 'Expert Badge Assignment',
      description: 'Automatically assigns expert badges to members based on their contributions and community recognition.',
      image: 'https://readdy.ai/api/search-image?query=Expert%20badge%20and%20recognition%20system%20with%20achievement%20tracking%20and%20member%20rewards%2C%20professional%20gamification%20interface%20with%20badges%20and%20community%20status%20indicators&width=400&height=250&seq=47&orientation=landscape',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      category: 'Recognition',
      tags: ['Badges', 'Recognition', 'Expert'],
      triggers: 2,
      actions: 3,
      runs: 8,
      lastRun: '1 day ago',
    },
    {
      id: 5,
      title: 'Content Quality Check',
      description: 'Reviews all new posts for quality and relevance before publishing to maintain community standards.',
      image: 'https://readdy.ai/api/search-image?query=Content%20quality%20review%20system%20with%20AI%20moderation%20and%20approval%20workflow%2C%20professional%20content%20management%20interface%20with%20quality%20control%20and%20publishing%20tools&width=400&height=250&seq=48&orientation=landscape',
      status: 'Draft',
      statusColor: 'bg-gray-100 text-gray-800',
      category: 'Moderation',
      tags: ['Quality', 'Moderation', 'Review'],
      triggers: 1,
      actions: 6,
      runs: 0,
      lastRun: 'Never',
    },
    {
      id: 6,
      title: 'Birthday Celebration Bot',
      description: 'Sends personalized birthday wishes and special offers to community members on their special day.',
      image: 'https://readdy.ai/api/search-image?query=Birthday%20celebration%20automation%20with%20personalized%20greetings%20and%20special%20offers%2C%20friendly%20community%20engagement%20system%20with%20celebration%20interface%20and%20member%20appreciation&width=400&height=250&seq=49&orientation=landscape',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      category: 'Engagement',
      tags: ['Birthday', 'Celebration', 'Personal'],
      triggers: 1,
      actions: 2,
      runs: 156,
      lastRun: 'Today',
    },
  ]

  return (
    <div>
      {/* Header with Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Your Active Workflows</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="w-full sm:w-[150px]">
            <DropdownComponent
              placeholder="All Status"
              options={['All Status', 'Active', 'Paused', 'Draft']}
              fullWidth={true}
              value={selectedStatus}
              padding="7px 14px"
              minHeight="10px"
              onSelect={(value) => {
                const status = typeof value === 'object' ? value.label : value
                setSelectedStatus(status)
              }}
            />
          </div>
          <button className="text-primary hover:bg-primary/10 px-3 py-2 text-sm rounded-lg transition-all duration-200 flex items-center justify-center">
            <FiFilter className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Workflows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative">
              <img
                alt={workflow.title}
                className="w-full h-48 object-cover object-top"
                src={workflow.image}
              />
              <div className="absolute top-4 left-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${workflow.statusColor}`}>
                  {workflow.status}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                  {workflow.category}
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {workflow.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                {workflow.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                {workflow.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                <div className="flex items-center">
                  <FiPlay className="mr-1" />
                  <span>{workflow.triggers} triggers</span>
                </div>
                <div className="flex items-center">
                  <FiSettings className="mr-1" />
                  <span>{workflow.actions} actions</span>
                </div>
                {workflow.runs > 0 && (
                  <>
                    <div className="flex items-center">
                      <FiBarChart className="mr-1" />
                      <span>{workflow.runs} runs</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      <span>{workflow.lastRun}</span>
                    </div>
                  </>
                )}
                {workflow.runs === 0 && (
                  <div className="flex items-center col-span-2">
                    <FiClock className="mr-1" />
                    <span>{workflow.lastRun}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <CommonGradientButton size="sm" className="flex-1">
                  Edit Workflow
                </CommonGradientButton>
                <button className="text-primary hover:bg-primary/10 px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all duration-200">
                  <FiMoreHorizontal />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Performance */}
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
          Workflow Performance
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">1,247</div>
            <div className="text-xs md:text-sm text-gray-600">Total Executions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">98.5%</div>
            <div className="text-xs md:text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">47.2h</div>
            <div className="text-xs md:text-sm text-gray-600">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">156</div>
            <div className="text-xs md:text-sm text-gray-600">Members Processed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWorkflows

