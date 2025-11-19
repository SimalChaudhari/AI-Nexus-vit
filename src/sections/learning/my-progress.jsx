import {
  FiTrendingUp,
  FiClock,
  FiBook,
  FiAward,
  FiTarget,
  FiStar,
  FiArrowUp,
  FiBarChart,
} from 'react-icons/fi'
import { CommonGradientButton } from '../../components'

const MyProgress = () => {
  const myCourses = [
    {
      id: 1,
      title: 'AI Community Building Fundamentals',
      progress: 75,
      lessons: '9/12',
      timeRemaining: '1.2 hours',
      lastAccessed: '2 hours ago',
      nextLesson: 'Member Retention Strategies',
      image: 'https://readdy.ai/api/search-image?query=Professional%20AI%20learning%20environment%20with%20diverse%20students%20studying%20artificial%20intelligence%20concepts%2C%20modern%20classroom%20with%20digital%20displays%20and%20interactive%20technology%2C%20educational%20atmosphere%20with%20clean%20design&width=100&height=100&seq=34&orientation=squarish',
    },
    {
      id: 2,
      title: 'Advanced Workflow Automation',
      progress: 45,
      lessons: '8/18',
      timeRemaining: '3.4 hours',
      lastAccessed: '1 day ago',
      nextLesson: 'Complex Trigger Conditions',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20automation%20workflow%20visualization%20with%20complex%20diagrams%20and%20AI%20processing%20nodes%2C%20professional%20technology%20workspace%20with%20multiple%20monitors%20showing%20data%20flows%20and%20analytics&width=100&height=100&seq=35&orientation=squarish',
    },
    {
      id: 3,
      title: 'Community Psychology & AI',
      progress: 100,
      lessons: '10/10',
      timeRemaining: 'Completed',
      lastAccessed: '3 days ago',
      nextLesson: 'Course Completed',
      image: 'https://readdy.ai/api/search-image?query=Psychology%20and%20AI%20research%20environment%20with%20brain%20visualization%20and%20human%20behavior%20analytics%2C%20scientific%20study%20atmosphere%20with%20charts%20and%20data%20analysis%2C%20professional%20academic%20setting&width=100&height=100&seq=36&orientation=squarish',
    },
    {
      id: 4,
      title: 'Data Analytics for Communities',
      progress: 20,
      lessons: '3/15',
      timeRemaining: '4.1 hours',
      lastAccessed: '1 week ago',
      nextLesson: 'Setting Up Analytics',
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%20with%20community%20metrics%20and%20AI%20insights%2C%20professional%20business%20intelligence%20environment%20with%20charts%20and%20graphs%2C%20modern%20office%20workspace%20with%20data%20visualization&width=100&height=100&seq=37&orientation=squarish',
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-2 md:mr-3 animate-pulse">
              <FiTrendingUp className="text-white text-lg md:text-xl" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Your Learning Journey</h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            {myCourses.map((course, index) => (
              <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <img
                      alt={course.title}
                      className="w-full sm:w-20 h-40 sm:h-20 rounded-lg object-cover object-top flex-shrink-0"
                      src={course.image}
                    />
                    <div className="flex-1 min-w-0 w-full">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <div className="mb-3">
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-900 font-medium">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs md:text-sm text-gray-600 mb-4">
                        <div>
                          <span className="block">Lessons: {course.lessons}</span>
                          <span className="block">Time remaining: {course.timeRemaining}</span>
                        </div>
                        <div>
                          <span className="block">Last accessed: {course.lastAccessed}</span>
                          <span className="block">Next: {course.nextLesson}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                        <CommonGradientButton size="sm" className="w-full sm:w-auto">Continue Learning</CommonGradientButton>
                        <button className="text-primary hover:bg-primary/10 px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all duration-200 text-center sm:text-left">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-4 md:space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                <FiBarChart className="text-blue-600 text-sm md:text-base" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Learning Stats</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center p-2.5 md:p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="flex items-center">
                  <FiClock className="text-blue-500 mr-1.5 md:mr-2 text-sm md:text-base" />
                  <span className="text-gray-600 text-xs md:text-sm">Total Hours</span>
                </div>
                <span className="font-bold text-gray-900 text-base md:text-lg">47.5h</span>
              </div>
              <div className="flex justify-between items-center p-2.5 md:p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                <div className="flex items-center">
                  <FiBook className="text-green-500 mr-1.5 md:mr-2 text-sm md:text-base" />
                  <span className="text-gray-600 text-xs md:text-sm">Courses Completed</span>
                </div>
                <span className="font-bold text-gray-900 text-base md:text-lg">12</span>
              </div>
              <div className="flex justify-between items-center p-2.5 md:p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <div className="flex items-center">
                  <FiAward className="text-yellow-500 mr-1.5 md:mr-2 text-sm md:text-base" />
                  <span className="text-gray-600 text-xs md:text-sm">Certificates Earned</span>
                </div>
                <span className="font-bold text-gray-900 text-base md:text-lg">8</span>
              </div>
              <div className="flex justify-between items-center p-2.5 md:p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                <div className="flex items-center">
                  <FiTarget className="text-orange-500 mr-1.5 md:mr-2 text-sm md:text-base" />
                  <span className="text-gray-600 text-xs md:text-sm">Current Streak</span>
                </div>
                <span className="font-bold text-orange-600 text-base md:text-lg">15 days</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl p-4 md:p-6 text-white relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2 md:mr-3 animate-bounce">
                  <FiAward className="text-xl md:text-2xl" />
                </div>
                <h3 className="text-base md:text-lg font-semibold">Achievement Unlocked!</h3>
              </div>
              <p className="text-blue-100 mb-3 md:mb-4 text-sm md:text-base">You've completed 5 AI courses this month</p>
              <div className="flex items-center">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-2 animate-spin">
                  <FiStar className="text-white text-xs md:text-sm" />
                </div>
                <span className="text-xs md:text-sm font-medium">+50 XP Bonus!</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-2 md:mr-3 animate-pulse">
                <FiTarget className="text-white text-sm md:text-base" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Next Milestone</h3>
            </div>
            <div className="mb-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 text-xs md:text-sm mb-2">
                <span className="text-gray-600 flex items-center">
                  <FiAward className="text-blue-500 mr-1" />
                  AI Expert Badge
                </span>
                <span className="text-gray-900 font-medium">8/10 courses</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 md:h-3 rounded-full transition-all duration-500 relative" style={{ width: '80%' }}>
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-0">Complete 2 more courses to earn your AI Expert badge</p>
            <CommonGradientButton
              className="mt-3 w-full"
              size="sm"
              icon={<FiArrowUp />}
              iconPosition="left"
            >
              Level Up Now!
            </CommonGradientButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProgress

