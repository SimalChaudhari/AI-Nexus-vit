import { CommonContainer } from '../../components'

const CommunitiesSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Create Your Community',
      description:
        'Set up your AI-powered community in minutes. Define your goals, target audience, and let our AI configure the optimal settings for engagement and growth.',
      bgColor: 'bg-blue-600',
    },
    {
      number: '2',
      title: 'Deploy Smart Workflows',
      description:
        'Activate intelligent automation workflows that handle member onboarding, content curation, engagement tracking, and personalized recommendations.',
      bgColor: 'bg-green-600',
    },
    {
      number: '3',
      title: 'Scale & Optimize',
      description:
        'Watch your community grow as AI continuously optimizes engagement, suggests improvements, and provides insights to maximize member value and retention.',
      bgColor: 'bg-purple-600',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <CommonContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How AI Communities Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our three-step process makes it easy to create, manage, and scale your AI-powered community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </CommonContainer>
    </section>
  )
}

export default CommunitiesSection

