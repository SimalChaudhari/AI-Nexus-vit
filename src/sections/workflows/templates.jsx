import {
  FiUserPlus,
  FiSend,
  FiBarChart,
  FiPlay,
  FiSettings,
  FiEye,
  FiClock,
  FiUsers,
  FiTrendingUp,
} from 'react-icons/fi'
import { CommonGradientButton } from '../../components'

const Templates = () => {
  const workflowTemplates = [
    {
      id: 1,
      title: 'Smart Member Onboarding',
      description: 'Automatically welcome new members, assign roles, and guide them through community introduction with personalized content recommendations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20member%20onboarding%20process%20with%20welcome%20interface%20and%20user%20guidance%20system%2C%20modern%20community%20management%20dashboard%20with%20clean%20design%20and%20friendly%20atmosphere&width=400&height=250&seq=38&orientation=landscape',
      category: 'Onboarding',
      tags: ['Welcome', 'Automation', 'Personalization'],
      triggers: 3,
      actions: 8,
    },
    {
      id: 2,
      title: 'Content Moderation AI',
      description: 'Automatically review posts, detect inappropriate content, flag for review, and maintain community standards using advanced AI content analysis.',
      image: 'https://readdy.ai/api/search-image?query=AI%20content%20moderation%20system%20with%20automated%20review%20interface%20and%20safety%20protocols%2C%20professional%20content%20management%20workspace%20with%20security%20features%20and%20monitoring%20tools&width=400&height=250&seq=39&orientation=landscape',
      category: 'Moderation',
      tags: ['Safety', 'AI Review', 'Automation'],
      triggers: 2,
      actions: 6,
    },
    {
      id: 3,
      title: 'Engagement Boost Campaign',
      description: 'Re-engage inactive members with personalized content, targeted notifications, and special offers based on their interests and activity patterns.',
      image: 'https://readdy.ai/api/search-image?query=Community%20engagement%20analytics%20with%20member%20activity%20charts%20and%20re-engagement%20campaigns%2C%20professional%20marketing%20dashboard%20with%20growth%20metrics%20and%20user%20interaction%20data&width=400&height=250&seq=40&orientation=landscape',
      category: 'Engagement',
      tags: ['Re-engagement', 'Personalization', 'Analytics'],
      triggers: 4,
      actions: 7,
    },
    {
      id: 4,
      title: 'Expert Q&A Routing',
      description: 'Automatically route questions to relevant experts, notify specialists, and ensure timely responses to maintain high-quality community discussions.',
      image: 'https://chatgpt.com/backend-api/estuary/content?id=file_000000006d0c72088332902f8f7fd464&ts=489870&p=fs&cid=1&sig=ec39d21c43c1f3b06fd9f230e6eda0ef36f2fc57f8e19e77da66f580bcfe0e36&v=0',
      category: 'Support',
      tags: ['Expert Matching', 'Q&A', 'Support'],
      triggers: 2,
      actions: 5,
    },
    {
      id: 5,
      title: 'Event Promotion Automation',
      description: 'Automatically promote upcoming events, send reminders, track RSVPs, and follow up with attendees using intelligent scheduling and targeting.',
      image: 'https://readdy.ai/api/search-image?query=Event%20promotion%20and%20management%20system%20with%20calendar%20interface%20and%20automated%20marketing%20tools%2C%20professional%20event%20planning%20workspace%20with%20scheduling%20and%20attendee%20management&width=400&height=250&seq=42&orientation=landscape',
      category: 'Events',
      tags: ['Events', 'Promotion', 'Scheduling'],
      triggers: 3,
      actions: 9,
    },
    {
      id: 6,
      title: 'Learning Path Recommendations',
      description: 'Suggest personalized learning content based on member interests, progress, and goals using AI-powered recommendation algorithms.',
      image: 'https://readdy.ai/api/search-image?query=Personalized%20learning%20recommendation%20system%20with%20AI%20algorithms%20and%20educational%20content%20curation%2C%20modern%20e-learning%20platform%20with%20adaptive%20learning%20paths%20and%20progress%20tracking&width=400&height=250&seq=43&orientation=landscape',
      category: 'Learning',
      tags: ['Learning', 'AI Recommendations', 'Personalization'],
      triggers: 2,
      actions: 4,
    },
  ]

  return (
    <div>
      {/* Featured Workflow */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Featured Workflow</h2>
        <div
          className="relative rounded-xl md:rounded-2xl overflow-hidden bg-cover bg-center min-h-[250px] md:min-h-[300px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://readdy.ai/api/search-image?query=Advanced%20automation%20workflow%20visualization%20with%20connected%20nodes%20and%20data%20flow%20diagrams%2C%20futuristic%20AI%20process%20management%20interface%20with%20glowing%20connections%2C%20professional%20technology%20workspace%20with%20clean%20modern%20design&width=1200&height=300&seq=27&orientation=landscape")`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center text-white p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Smart Member Onboarding</h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 text-gray-200">
              Automatically welcome new members, assign them to relevant groups, send personalized content, and track their engagement journey with AI-powered insights.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-4 md:mb-6 text-sm sm:text-base">
              <div className="flex items-center">
                <FiUserPlus className="mr-2" />
                <span>Auto-assign roles</span>
              </div>
              <div className="flex items-center">
                <FiSend className="mr-2" />
                <span>Welcome sequences</span>
              </div>
              <div className="flex items-center">
                <FiBarChart className="mr-2" />
                <span>Engagement tracking</span>
              </div>
            </div>
            <div className="flex justify-center">
              <CommonGradientButton size="md" className="w-full sm:w-auto">
                Use This Template
              </CommonGradientButton>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Templates Grid */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Workflow Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {workflowTemplates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  alt={template.title}
                  className="w-full h-48 object-cover object-top"
                  src={template.image}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {template.category}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                  {template.tags.map((tag, index) => (
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
                    <span>{template.triggers} triggers</span>
                  </div>
                  <div className="flex items-center">
                    <FiSettings className="mr-1" />
                    <span>{template.actions} actions</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CommonGradientButton size="sm" className="flex-1">
                    Use Template
                  </CommonGradientButton>
                  <button className="text-primary hover:bg-primary/10 px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all duration-200">
                    <FiEye />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Use AI Workflows */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
          Why Use AI Workflows?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FiClock className="text-xl md:text-2xl text-blue-600" />
            </div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Save 80% Time</h4>
            <p className="text-sm md:text-base text-gray-600">
              Automate repetitive tasks and focus on what matters most - building meaningful connections.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FiUsers className="text-xl md:text-2xl text-green-600" />
            </div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Better Engagement</h4>
            <p className="text-sm md:text-base text-gray-600">
              Deliver personalized experiences that keep members active and engaged in your community.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FiTrendingUp className="text-xl md:text-2xl text-purple-600" />
            </div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Scale Effortlessly</h4>
            <p className="text-sm md:text-base text-gray-600">
              Handle thousands of members with the same personal touch as your first ten members.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Templates

