import { FiArrowRight } from 'react-icons/fi'
import { CommonGradientButton } from '../../components'

const JoinSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the AI Revolution?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Connect with the brightest AI minds, learn cutting-edge techniques, and build the future together.
        </p>
        <CommonGradientButton
          size="lg"
          icon={<FiArrowRight size={20} />}
          iconPosition="left"
          className="mx-auto"
        >
          Get Started Now
        </CommonGradientButton>
      </div>
    </section>
  )
}

export default JoinSection

