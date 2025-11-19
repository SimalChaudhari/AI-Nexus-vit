import { FiZap, FiPlay } from 'react-icons/fi'
import { CommonGradientButton } from '../../components'

const HeroSection = () => {
  const backgroundImageUrl =
    'https://readdy.ai/api/search-image?query=futuristic%20AI%20technology%20network%20with%20glowing%20neural%20connections%2C%20holographic%20interfaces%2C%20and%20digital%20data%20streams%20in%20a%20modern%20tech%20environment%20with%20soft%20blue%20and%20yellow%20lighting%2C%20minimalist%20clean%20background%20perfect%20for%20text%20overlay&width=1920&height=1080&seq=hero-ai-nexus&orientation=landscape'

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(86, 199, 218, 0.1), rgba(252, 214, 11, 0.1)), url("${backgroundImageUrl}")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span
                style={{
                  fontFamily: 'Pacifico, serif',
                  background: 'linear-gradient(45deg, rgb(86, 199, 218), #fcd60b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI Nexus
              </span>
              <br />
              <span className="text-gray-900">Where AI Minds Connect</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join the ultimate AI community platform. Discover cutting-edge AI communities, learn
              from experts, and build intelligent workflows. Connect with AI enthusiasts, researchers,
              and innovators worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CommonGradientButton
                size="lg"
                icon={<FiZap size={20} />}
                iconPosition="left"
              >
                Start Your AI Journey
              </CommonGradientButton>
              <button
                className="font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-4 text-lg flex items-center justify-center"
              >
                <FiPlay className="mr-2" size={20} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

