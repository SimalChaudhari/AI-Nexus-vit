import { useState } from 'react'
import { RouterLink } from '../../components'
import {
  FiSearch,
  FiImage,
  FiMusic,
  FiDollarSign,
  FiSun,
  FiCode,
  FiActivity,
  FiTarget,
  FiBook,
  FiHeart,
} from 'react-icons/fi'

const DiscoverSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAllCategories, setShowAllCategories] = useState(false)

  const allCategories = [
    { label: 'All', value: 'All', icon: null },
    { label: 'Hobbies', value: 'Hobbies', icon: FiImage },
    { label: 'Music', value: 'Music', icon: FiMusic },
    { label: 'Money', value: 'Money', icon: FiDollarSign },
    { label: 'Spirituality', value: 'Spirituality', icon: FiSun },
    { label: 'Tech', value: 'Tech', icon: FiCode },
    { label: 'Health', value: 'Health', icon: FiActivity },
    { label: 'Sports', value: 'Sports', icon: FiTarget },
    { label: 'Self-improvement', value: 'Self-improvement', icon: FiBook },
    { label: 'Relationships', value: 'Relationships', icon: FiHeart },
  ]

  // Show first 6 categories initially, rest when expanded
  const visibleCategories = showAllCategories
    ? allCategories
    : allCategories.slice(0, 6)

  const allCommunities = [
    {
      id: 1,
      slug: '/thatpickleballschool/about',
      name: 'That Pickleball School',
      description: 'Learn strategies to play better pickleball right away! 👉 With top pro Kyle Koszuta & his team of coaches.',
      members: '1.2k',
      price: '$39/month',
      rank: 1,
      category: 'Sports',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20pickleball%20court%20with%20players%20in%20action%2C%20modern%20sports%20facility%20with%20clean%20white%20background%2C%20athletic%20training%20environment%2C%20high-quality%20sports%20photography%20with%20vibrant%20colors%20and%20dynamic%20movement&width=400&height=200&seq=1&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Pickleball%20paddle%20and%20ball%20logo%20design%2C%20minimalist%20sports%20icon%20with%20clean%20background%2C%20professional%20athletic%20branding%2C%20simple%20geometric%20design%20in%20vibrant%20colors&width=100&height=100&seq=2&orientation=squarish',
    },
    {
      id: 2,
      slug: '/ai-automation-society/about',
      name: 'AI Automation Society',
      description: 'A community for mastering AI-driven automation and AI agents. Learn, collaborate, and optimize your workflows!',
      members: '176.3k',
      price: 'Free',
      rank: 2,
      category: 'Tech',
      coverImage: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20technology%20workspace%20with%20automation%20robots%20and%20digital%20interfaces%2C%20clean%20modern%20tech%20environment%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20technology%20photography&width=400&height=200&seq=3&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=AI%20robot%20head%20logo%20with%20circuit%20patterns%2C%20modern%20technology%20icon%20design%2C%20blue%20and%20silver%20colors%2C%20minimalist%20artificial%20intelligence%20symbol&width=100&height=100&seq=4&orientation=squarish',
    },
    {
      id: 3,
      slug: '/calligraphy/about',
      name: 'Calligraphy Skool',
      description: 'Learn modern calligraphy the fun, easy way! ✍️ With sisters Jordan & Jillian',
      members: '1.3k',
      price: '$9/month',
      rank: 3,
      category: 'Hobbies',
      coverImage: 'https://readdy.ai/api/search-image?query=Beautiful%20calligraphy%20workspace%20with%20elegant%20pens%20and%20handwritten%20letters%2C%20artistic%20writing%20setup%20with%20clean%20white%20background%2C%20creative%20arts%20and%20crafts%20environment&width=400&height=200&seq=5&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Elegant%20calligraphy%20pen%20nib%20logo%20design%2C%20artistic%20writing%20tool%20icon%2C%20gold%20and%20black%20colors%2C%20sophisticated%20typography%20symbol&width=100&height=100&seq=6&orientation=squarish',
    },
    {
      id: 4,
      slug: '/inasdanceacademy/about',
      name: "Ina's Dance Academy",
      description: "For ProAm Latin Dancers seeking more freedom and expression on the dance floor. Join 5x World Champion Ina Jeliazkova in her exclusive dance community",
      members: '457',
      price: '$99/month',
      rank: 4,
      category: 'Hobbies',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20dance%20studio%20with%20elegant%20dancers%20in%20Latin%20dance%20poses%2C%20sophisticated%20ballroom%20environment%20with%20mirrors%20and%20wooden%20floors%2C%20artistic%20dance%20photography&width=400&height=200&seq=7&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Dancing%20couple%20silhouette%20logo%20in%20elegant%20pose%2C%20ballroom%20dance%20icon%20design%2C%20gold%20and%20black%20colors%2C%20graceful%20movement%20symbol&width=100&height=100&seq=8&orientation=squarish',
    },
    {
      id: 5,
      slug: '/skoolers/about',
      name: 'Skoolers',
      description: "Private club for skool owners. Let's build communities together.",
      members: '189k',
      price: 'Free',
      rank: 5,
      category: 'Tech',
      coverImage: 'https://readdy.ai/api/search-image?query=Modern%20community%20building%20workspace%20with%20people%20collaborating%2C%20professional%20networking%20environment%2C%20clean%20contemporary%20office%20space%20with%20natural%20lighting&width=400&height=200&seq=9&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Community%20network%20logo%20with%20connected%20people%20icons%2C%20social%20networking%20symbol%2C%20modern%20blue%20and%20white%20design%2C%20professional%20community%20branding&width=100&height=100&seq=10&orientation=squarish',
    },
    {
      id: 6,
      slug: '/theladychange/about',
      name: 'The Lady Change',
      description: 'THE #1 community for menopausal (peri & post) women to lose weight, get healthier and regain their confidence!',
      members: '1.3k',
      price: '$49/month',
      rank: 6,
      category: 'Health',
      coverImage: 'https://readdy.ai/api/search-image?query=Empowering%20womens%20health%20and%20wellness%20environment%2C%20confident%20mature%20women%20in%20fitness%20setting%2C%20supportive%20community%20atmosphere%20with%20warm%20lighting&width=400&height=200&seq=11&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Feminine%20wellness%20logo%20with%20butterfly%20or%20flower%20symbol%2C%20empowering%20womens%20health%20icon%2C%20pink%20and%20purple%20colors%2C%20elegant%20transformation%20design&width=100&height=100&seq=12&orientation=squarish',
    },
    {
      id: 7,
      slug: '/theaspinallway/about',
      name: 'The Aspinall Way',
      description: 'Join the FIRST and ONLY Community Created by a UFC Champion, Become Extraordinary Today!🥊',
      members: '22.5k',
      price: 'Free',
      rank: 7,
      category: 'Sports',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20MMA%20training%20facility%20with%20UFC%20octagon%20and%20fighters%2C%20intense%20martial%20arts%20environment%2C%20dynamic%20sports%20photography%20with%20dramatic%20lighting&width=400&height=200&seq=13&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=UFC%20champion%20fighter%20logo%20with%20boxing%20gloves%2C%20martial%20arts%20emblem%20design%2C%20red%20and%20black%20colors%2C%20powerful%20combat%20sports%20symbol&width=100&height=100&seq=14&orientation=squarish',
    },
    {
      id: 8,
      slug: '/tom-bilyeu/about',
      name: 'Zero To Founder by Tom Bilyeu',
      description: 'Start your business and get on the path to financial freedom with billion-dollar founder Tom Bilyeu.',
      members: '1.9k',
      price: '$119/month',
      rank: 8,
      category: 'Money',
      coverImage: 'https://readdy.ai/api/search-image?query=Successful%20entrepreneur%20workspace%20with%20modern%20office%20setup%2C%20business%20success%20environment%2C%20professional%20corporate%20atmosphere%20with%20clean%20design&width=400&height=200&seq=15&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Entrepreneur%20success%20logo%20with%20upward%20arrow%20and%20dollar%20sign%2C%20business%20growth%20icon%2C%20gold%20and%20blue%20colors%2C%20professional%20achievement%20symbol&width=100&height=100&seq=16&orientation=squarish',
    },
    {
      id: 9,
      slug: '/daybydayclub/about',
      name: 'Day by Day Wellness Club',
      description: '#1 community dedicated to anyone on their journey to becoming their best self.',
      members: '59.8k',
      price: 'Free',
      rank: 9,
      category: 'Self-improvement',
      coverImage: 'https://readdy.ai/api/search-image?query=Peaceful%20wellness%20and%20mindfulness%20environment%20with%20meditation%20space%2C%20serene%20self-improvement%20setting%2C%20natural%20lighting%20and%20calming%20atmosphere&width=400&height=200&seq=17&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Wellness%20lotus%20flower%20logo%20with%20zen%20circle%2C%20mindfulness%20and%20meditation%20icon%2C%20green%20and%20blue%20colors%2C%20peaceful%20spiritual%20symbol&width=100&height=100&seq=18&orientation=squarish',
    },
    {
      id: 10,
      slug: '/unison-producer-growth-hub/about',
      name: 'Unison Producer Growth Hub',
      description: 'The #1 free community for music producers to grow, learn, connect and simplify the process of producing pro-quality music.',
      members: '38.1k',
      price: 'Free',
      rank: 10,
      category: 'Music',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20music%20production%20studio%20with%20mixing%20console%20and%20monitors%2C%20creative%20audio%20workspace%2C%20modern%20recording%20equipment%20with%20atmospheric%20lighting&width=400&height=200&seq=19&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Music%20production%20logo%20with%20sound%20waves%20and%20headphones%2C%20audio%20engineering%20icon%2C%20purple%20and%20orange%20colors%2C%20creative%20music%20symbol&width=100&height=100&seq=20&orientation=squarish',
    },
    {
      id: 11,
      slug: '/the-acting-lab/about',
      name: 'The Acting Lab',
      description: 'Learn the craft and business of the acting industry from professionals seen on Stranger Things, Law & Order & much more!',
      members: '182',
      price: '$199/month',
      rank: 11,
      category: 'Hobbies',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20acting%20studio%20with%20stage%20lights%20and%20theater%20setup%2C%20dramatic%20performance%20environment%2C%20creative%20arts%20space%20with%20professional%20lighting&width=400&height=200&seq=21&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Theater%20masks%20logo%20with%20drama%20and%20comedy%20faces%2C%20acting%20performance%20icon%2C%20red%20and%20gold%20colors%2C%20classic%20theatrical%20symbol&width=100&height=100&seq=22&orientation=squarish',
    },
    {
      id: 12,
      slug: '/schoolofmentors/about',
      name: 'School of Mentors',
      description: 'The #1 Community in the World for Entrepreneurs and Get Mentored Every Week by the Millionaires and Billionaires that We Interview',
      members: '5.6k',
      price: '$49/month',
      rank: 12,
      category: 'Money',
      coverImage: 'https://readdy.ai/api/search-image?query=Executive%20mentorship%20meeting%20room%20with%20successful%20business%20leaders%2C%20professional%20networking%20environment%2C%20luxury%20corporate%20setting%20with%20modern%20design&width=400&height=200&seq=23&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Mentorship%20handshake%20logo%20with%20growth%20arrow%2C%20business%20coaching%20icon%2C%20navy%20blue%20and%20gold%20colors%2C%20professional%20guidance%20symbol&width=100&height=100&seq=24&orientation=squarish',
    },
  ]

  // Filter communities based on selected category and search query
  const filteredCommunities = allCommunities.filter((community) => {
    const matchesCategory =
      selectedCategory === 'All' || community.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover AI Communities</h1>
        <p className="text-lg text-gray-600">
          Join intelligent communities powered by AI or{' '}
          <RouterLink
            to="/signup?utm_source=skooldotcom&utm_medium=website&utm_content=create_your_own&utm_campaign=signup_home_page_link"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            create your own
          </RouterLink>
        </p>
      </div>

      {/* Search Form */}
      <div className="max-w-2xl mx-auto mb-8">
        <form className="w-full">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400 text-lg" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Search for anything"
              type="text"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {visibleCategories.map((category, index) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.value
            return (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {Icon && <Icon className="text-base" />}
                {category.label}
              </button>
            )
          })}
          {allCategories.length > 6 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary"
            >
              {showAllCategories ? 'Show Less' : 'More...'}
            </button>
          )}
        </div>
      </div>

      {/* Communities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredCommunities.map((community) => {
          // Ensure the slug starts with /communities
          const slugPath = community.slug.startsWith('/communities')
            ? community.slug
            : `/communities${community.slug.startsWith('/') ? '' : '/'}${community.slug}`
          return (
            <RouterLink
              key={community.id}
              to={slugPath}
              className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
            <div className="relative">
              <img
                alt={community.name}
                className="w-full h-32 object-cover object-top"
                src={community.coverImage}
              />
              <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                #{community.rank}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  alt={`${community.name} logo`}
                  className="w-8 h-8 rounded-full object-cover"
                  src={community.logoImage}
                />
                <h3 className="font-semibold text-gray-900 text-sm">{community.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{community.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{community.members} Members</span>
                <span className="font-medium text-gray-900">{community.price}</span>
              </div>
            </div>
          </RouterLink>
          )
        })}
      </div>
    </main>
  )
}

export default DiscoverSection

