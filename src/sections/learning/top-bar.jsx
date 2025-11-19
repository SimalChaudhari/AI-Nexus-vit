import { FiZap } from 'react-icons/fi'

const TopBar = () => {
  const level = 12
  const currentXP = 2877
  const maxXP = 3000
  const streak = 15
  const progressPercentage = (currentXP / maxXP) * 100

  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                {level}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Level {level} Learner
                </div>
                <div className="text-xs text-gray-500">
                  {currentXP.toLocaleString()}/{maxXP.toLocaleString()} XP
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out relative"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer transition-transform hover:scale-105">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <FiZap className="text-orange-500" size={18} />
            </div>
            <span className="text-sm font-medium text-gray-900">
              {streak} day streak!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
