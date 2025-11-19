import { FiUsers, FiZap, FiGitBranch } from 'react-icons/fi'
import { CommonContainer } from '../../components'

const CardsSection = () => {
  const cards = [
    {
      icon: FiUsers,
      title: 'AI Communities',
      description:
        'Discover and join specialized AI communities. From machine learning to robotics, find your tribe of AI enthusiasts and experts.',
    },
    {
      icon: FiZap,
      title: 'Smart Learning',
      description:
        'AI-powered learning paths that adapt to your skill level. Gamified experiences with achievements and personalized recommendations.',
    },
    {
      icon: FiGitBranch,
      title: 'AI Workflows',
      description:
        'Build and share intelligent workflows. Automate tasks with AI agents and connect with powerful APIs and integrations.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <CommonContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powered by <span className="text-primary">Artificial Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of community learning with AI-driven features that adapt to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </CommonContainer>
    </section>
  )
}

export default CardsSection

