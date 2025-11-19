import { useState } from 'react'
import {
  FiStar,
  FiClock,
  FiBook,
  FiTrendingUp,
  FiAward,
} from 'react-icons/fi'
import AllCourses from './all-courses'
import MyProgress from './my-progress'

const MainSection = () => {
  const [activeTab, setActiveTab] = useState('courses') // 'courses' or 'progress'

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <div className="relative inline-block mb-3 md:mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent px-2">
            AI-Powered Learning Hub
          </h1>
          <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full items-center justify-center animate-spin md:flex hidden">
            <FiStar className="text-white text-xs md:text-sm" />
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
          Discover personalized learning paths, AI-curated content, and intelligent progress tracking designed to accelerate your growth in AI and community building.
        </p>
        <div className="flex sm:flex-row flex-col justify-center mt-4 md:mt-6 gap-2 md:gap-6 px-2">
          <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm sm:rounded-full rounded-lg px-3 md:px-4 py-1.5 md:py-2 shadow-sm md:border-0 border-2 border-gray-200">
            <FiAward className="text-yellow-500 text-sm md:text-base" />
            <span className="text-xs md:text-sm font-medium text-gray-700">8 Certificates Earned</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm sm:rounded-full rounded-lg px-3 md:px-4 py-1.5 md:py-2 shadow-sm md:border-0 border-2 border-gray-200">
            <FiClock className="text-blue-500 text-sm md:text-base" />
            <span className="text-xs md:text-sm font-medium text-gray-700">47.5h Learning Time</span>
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-8 px-4">
        <div className="bg-white/90 backdrop-blur-sm md:rounded-full rounded-lg p-2 shadow-lg border border-white/20 flex sm:flex-row flex-col gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('courses')}
            className={`flex-1 sm:flex-none px-4 sm:px-8 py-2.5 sm:py-3 md:rounded-full rounded-lg font-medium text-sm sm:text-base ${
              activeTab === 'courses'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <FiBook className="inline mr-1.5 sm:mr-2" />
            <span className="inline">All Courses</span>
            {/* <span className="sm:hidden">Courses</span> */}
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex-1 sm:flex-none px-4 sm:px-8 py-2.5 sm:py-3 md:rounded-full rounded-lg font-medium text-sm sm:text-base ${
              activeTab === 'progress'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <FiTrendingUp className="inline mr-1.5 sm:mr-2" />
            <span className="inline">My Progress</span>
            {/* <span className="sm:hidden">Progress</span> */}
          </button>
        </div>
      </div>

      {/* All Courses View */}
      {activeTab === 'courses' && <AllCourses />}

      {/* My Progress View */}
      {activeTab === 'progress' && <MyProgress />}
    </main>
  )
}

export default MainSection
