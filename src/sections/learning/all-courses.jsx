import {
  FiStar,
  FiAward,
  FiPlay,
  FiTarget,
  FiCpu,
  FiEye,
  FiTrendingUp,
} from 'react-icons/fi'
import { CommonGradientButton } from '../../components'

const AllCourses = () => {
  const learningPaths = [
    {
      id: 1,
      title: 'AI Community Building Fundamentals',
      description: 'Learn the basics of creating and managing AI-powered communities. Understand member psychology, engagement strategies, and automation principles.',
      instructor: 'Dr. Sarah Chen',
      duration: '4.5 hours',
      rating: 4.8,
      reviews: 2847,
      price: '$49',
      level: 'Beginner',
      levelColor: 'bg-green-100 text-green-800',
      image: 'https://readdy.ai/api/search-image?query=Professional%20AI%20learning%20environment%20with%20diverse%20students%20studying%20artificial%20intelligence%20concepts%2C%20modern%20classroom%20with%20digital%20displays%20and%20interactive%20technology%2C%20educational%20atmosphere%20with%20clean%20design&width=400&height=250&seq=28&orientation=landscape',
    },
    {
      id: 2,
      title: 'Advanced Workflow Automation',
      description: 'Master complex automation workflows using AI. Build sophisticated member journeys, automated content curation, and intelligent engagement systems.',
      instructor: 'Marcus Rodriguez',
      duration: '6.2 hours',
      rating: 4.9,
      reviews: 1234,
      price: '$89',
      level: 'Advanced',
      levelColor: 'bg-red-100 text-red-800',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20automation%20workflow%20visualization%20with%20complex%20diagrams%20and%20AI%20processing%20nodes%2C%20professional%20technology%20workspace%20with%20multiple%20monitors%20showing%20data%20flows%20and%20analytics&width=400&height=250&seq=29&orientation=landscape',
    },
    {
      id: 3,
      title: 'Community Psychology & AI',
      description: 'Understand how AI can enhance human connections in digital communities. Learn about behavioral patterns, engagement psychology, and AI-assisted moderation.',
      instructor: 'Prof. Emily Watson',
      duration: '3.8 hours',
      rating: 4.7,
      reviews: 1892,
      price: '$69',
      level: 'Intermediate',
      levelColor: 'bg-yellow-100 text-yellow-800',
      image: 'https://readdy.ai/api/search-image?query=Psychology%20and%20AI%20research%20environment%20with%20brain%20visualization%20and%20human%20behavior%20analytics%2C%20scientific%20study%20atmosphere%20with%20charts%20and%20data%20analysis%2C%20professional%20academic%20setting&width=400&height=250&seq=30&orientation=landscape',
    },
    {
      id: 4,
      title: 'Data Analytics for Communities',
      description: 'Leverage AI-powered analytics to understand your community better. Learn to interpret engagement metrics, predict member behavior, and optimize growth.',
      instructor: 'David Kim',
      duration: '5.1 hours',
      rating: 4.6,
      reviews: 987,
      price: '$79',
      level: 'Intermediate',
      levelColor: 'bg-yellow-100 text-yellow-800',
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%20with%20community%20metrics%20and%20AI%20insights%2C%20professional%20business%20intelligence%20environment%20with%20charts%20and%20graphs%2C%20modern%20office%20workspace%20with%20data%20visualization&width=400&height=250&seq=31&orientation=landscape',
    },
    {
      id: 5,
      title: 'AI Content Curation Mastery',
      description: 'Automate content discovery, curation, and distribution using AI. Create intelligent content feeds that keep your community engaged and informed.',
      instructor: 'Lisa Park',
      duration: '4.3 hours',
      rating: 4.8,
      reviews: 1456,
      price: '$59',
      level: 'Intermediate',
      levelColor: 'bg-yellow-100 text-yellow-800',
      image: 'https://readdy.ai/api/search-image?query=Content%20curation%20workspace%20with%20AI%20algorithms%20processing%20articles%20and%20media%2C%20digital%20content%20management%20environment%20with%20organized%20feeds%20and%20automated%20systems&width=400&height=250&seq=32&orientation=landscape',
    },
    {
      id: 6,
      title: 'Scaling Communities with AI',
      description: 'Learn strategies to scale your community from hundreds to thousands of members while maintaining quality and engagement through AI automation.',
      instructor: 'Alex Thompson',
      duration: '7.2 hours',
      rating: 4.9,
      reviews: 743,
      price: '$99',
      level: 'Advanced',
      levelColor: 'bg-red-100 text-red-800',
      image: 'https://readdy.ai/api/search-image?query=Large%20scale%20community%20management%20with%20growth%20charts%20and%20member%20analytics%2C%20professional%20business%20scaling%20environment%20with%20AI%20automation%20tools%20and%20success%20metrics&width=400&height=250&seq=33&orientation=landscape',
    },
  ]

  const aiRecommendations = [
    {
      title: 'Advanced Workflow Automation',
      description: 'Perfect match based on your AI automation interests',
      match: 95,
      icon: 'settings',
      color: 'purple',
    },
    {
      title: 'Community Psychology & AI',
      description: 'Recommended for community builders',
      match: 88,
      icon: 'group',
      color: 'blue',
    },
  ]

  return (
    <div>
      {/* Featured Course */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-wrap items-center mb-4 md:mb-6 gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-2 md:mr-3 animate-pulse">
            <FiStar className="text-white text-lg md:text-xl" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Featured Course</h2>
          <div className="ml-0 md:ml-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium animate-bounce">
            HOT
          </div>
        </div>
        <div
          className="relative rounded-xl md:rounded-2xl overflow-hidden bg-cover bg-center min-h-[300px] md:min-h-[400px] lg:min-h-[450px] flex items-center transform hover:scale-[1.02] transition-transform duration-300 shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://readdy.ai/api/search-image?query=Advanced%20AI%20automation%20workspace%20with%20holographic%20interfaces%20and%20neural%20network%20visualizations%2C%20futuristic%20learning%20environment%20with%20glowing%20blue%20circuits%2C%20professional%20technology%20education%20setting%20with%20clean%20modern%20design&width=1200&height=400&seq=26&orientation=landscape")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="max-w-2xl mx-auto text-center text-white p-4 sm:p-6 md:p-8 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Master AI Community Automation</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-gray-200 leading-relaxed px-2">
              Learn to build intelligent workflows that scale your community automatically. From member onboarding to content curation, master the art of AI-driven community management.
            </p>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center animate-pulse">
                <FiAward className="mr-1.5 md:mr-2 text-sm md:text-base" />
                Bestseller
              </span>
              <span className="text-gray-200 flex items-center text-xs md:text-sm">
                <FiStar className="text-yellow-400 mr-1 fill-yellow-400 text-sm md:text-base" />
                4.9 ★ <span className="hidden sm:inline">(2,847 reviews)</span><span className="sm:hidden">(2.8k)</span>
              </span>
            </div>
            <div className="flex justify-center">
              <CommonGradientButton
                className='w-full sm:w-auto'
                icon={<FiPlay />}
                iconPosition="left"
                size="lg"
              >
                Start Learning Now
              </CommonGradientButton>
            </div>
          </div>
          <div className="absolute top-4 left-4 md:top-10 md:left-10 w-1.5 h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-2 h-2 md:w-3 md:h-3 bg-blue-400/50 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-4 md:right-10 w-1 h-1 bg-purple-400/50 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
            <FiTarget className="text-white text-xl" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Learning Paths</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningPaths.map((course, index) => (
            <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }} className="flex">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col w-full">
                <div className="relative">
                  <img
                    alt={course.title}
                    className="w-full h-48 object-cover object-top"
                    src={course.image}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${course.levelColor}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">{course.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{course.instructor}</span>
                    <span className="mx-2">•</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({course.reviews.toLocaleString()})</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">{course.price}</span>
                  </div>
                  <div className="mt-auto">
                    <CommonGradientButton className="w-full" size="sm">
                      Enroll Now
                    </CommonGradientButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-8 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
        <div className="relative z-10">
          <div className="flex flex-wrap items-center mb-3 md:mb-4 gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg md:rounded-xl flex items-center justify-center mr-2 md:mr-3 animate-pulse">
              <FiCpu className="text-white text-xl md:text-2xl" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">AI Recommendations for You</h3>
            <div className="ml-0 md:ml-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium animate-bounce">
              SMART
            </div>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6">
            Based on your learning history and community interests, our AI suggests these personalized courses to accelerate your growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {aiRecommendations.map((rec, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-${rec.color}-200/50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center mb-2 md:mb-3">
                  <div className={`w-7 h-7 md:w-8 md:h-8 bg-${rec.color}-100 rounded-lg flex items-center justify-center mr-2 md:mr-3`}>
                    {rec.icon === 'settings' ? (
                      <FiTarget className={`text-${rec.color}-600 text-sm md:text-base`} />
                    ) : (
                      <FiTrendingUp className={`text-${rec.color}-600 text-sm md:text-base`} />
                    )}
                  </div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-900">{rec.title}</h4>
                </div>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">{rec.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex items-center w-full sm:w-auto">
                    <div className={`w-12 md:w-16 h-1.5 md:h-2 bg-${rec.color}-200 rounded-full overflow-hidden mr-2`}>
                      <div
                        className={`w-full h-full bg-gradient-to-r from-${rec.color}-500 to-pink-500 animate-pulse`}
                        style={{ width: `${rec.match}%` }}
                      ></div>
                    </div>
                    <span className={`text-${rec.color}-600 font-medium text-xs md:text-sm whitespace-nowrap`}>{rec.match}% match</span>
                  </div>
                  <button className={`text-${rec.color}-600 hover:bg-${rec.color}-50 px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center w-full sm:w-auto justify-center sm:justify-start`}>
                    <FiEye className="mr-1 text-xs md:text-sm" />
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCourses

