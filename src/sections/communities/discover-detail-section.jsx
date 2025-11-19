import { FiUsers, FiDollarSign, FiArrowLeft, FiCheck } from 'react-icons/fi'
import { CommonGradientButton, useRouter } from '../../components'

const DiscoverDetailSection = () => {
  const router = useRouter()
  const { slug } = router.params

  // This would typically come from an API or context
  // For now, using the same data structure as discover-section
  const allCommunities = [
    {
      id: 1,
      slug: '/thatpickleballschool/about',
      name: 'That Pickleball School',
      description: 'Learn strategies to play better pickleball right away! 👉 With top pro Kyle Koszuta & his team of coaches.',
      fullDescription: 'Join That Pickleball School and learn from top professional Kyle Koszuta and his team of expert coaches. This community is designed for players of all levels who want to improve their game, learn advanced strategies, and connect with fellow pickleball enthusiasts. Get access to exclusive training videos, live coaching sessions, and a supportive community of players.',
      members: '1.2k',
      price: '$39/month',
      rank: 1,
      category: 'Sports',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20pickleball%20court%20with%20players%20in%20action%2C%20modern%20sports%20facility%20with%20clean%20white%20background%2C%20athletic%20training%20environment%2C%20high-quality%20sports%20photography%20with%20vibrant%20colors%20and%20dynamic%20movement&width=400&height=200&seq=1&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Pickleball%20paddle%20and%20ball%20logo%20design%2C%20minimalist%20sports%20icon%20with%20clean%20background%2C%20professional%20athletic%20branding%2C%20simple%20geometric%20design%20in%20vibrant%20colors&width=100&height=100&seq=2&orientation=squarish',
      features: [
        'Exclusive training videos from pro coaches',
        'Live Q&A sessions with Kyle Koszuta',
        'Community forum for strategy discussions',
        'Monthly tournaments and challenges',
        'Access to premium training materials',
      ],
    },
    {
      id: 2,
      slug: '/ai-automation-society/about',
      name: 'AI Automation Society',
      description: 'A community for mastering AI-driven automation and AI agents. Learn, collaborate, and optimize your workflows!',
      fullDescription: 'The AI Automation Society is the premier community for professionals and enthusiasts who want to master AI-driven automation. Learn to build powerful AI agents, automate complex workflows, and collaborate with like-minded individuals. Get access to cutting-edge tools, expert guidance, and a network of automation professionals.',
      members: '176.3k',
      price: 'Free',
      rank: 2,
      category: 'Tech',
      coverImage: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20technology%20workspace%20with%20automation%20robots%20and%20digital%20interfaces%2C%20clean%20modern%20tech%20environment%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20technology%20photography&width=400&height=200&seq=3&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=AI%20robot%20head%20logo%20with%20circuit%20patterns%2C%20modern%20technology%20icon%20design%2C%20blue%20and%20silver%20colors%2C%20minimalist%20artificial%20intelligence%20symbol&width=100&height=100&seq=4&orientation=squarish',
      features: [
        'Access to AI automation tools and resources',
        'Weekly workshops and tutorials',
        'Community-driven project collaborations',
        'Expert mentorship program',
        'Exclusive automation templates',
      ],
    },
    {
      id: 3,
      slug: '/calligraphy/about',
      name: 'Calligraphy Skool',
      description: 'Learn modern calligraphy the fun, easy way! ✍️ With sisters Jordan & Jillian',
      fullDescription: 'Join Calligraphy Skool and discover the art of modern calligraphy with sisters Jordan & Jillian. Whether you\'re a complete beginner or looking to refine your skills, this community offers step-by-step tutorials, live workshops, and a supportive environment to practice and share your work.',
      members: '1.3k',
      price: '$9/month',
      rank: 3,
      category: 'Hobbies',
      coverImage: 'https://readdy.ai/api/search-image?query=Beautiful%20calligraphy%20workspace%20with%20elegant%20pens%20and%20handwritten%20letters%2C%20artistic%20writing%20setup%20with%20clean%20white%20background%2C%20creative%20arts%20and%20crafts%20environment&width=400&height=200&seq=5&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Elegant%20calligraphy%20pen%20nib%20logo%20design%2C%20artistic%20writing%20tool%20icon%2C%20gold%20and%20black%20colors%2C%20sophisticated%20typography%20symbol&width=100&height=100&seq=6&orientation=squarish',
      features: [
        'Step-by-step video tutorials',
        'Live calligraphy workshops',
        'Digital and traditional techniques',
        'Community gallery for sharing work',
        'Personalized feedback from instructors',
      ],
    },
    {
      id: 4,
      slug: '/inasdanceacademy/about',
      name: "Ina's Dance Academy",
      description: "For ProAm Latin Dancers seeking more freedom and expression on the dance floor. Join 5x World Champion Ina Jeliazkova in her exclusive dance community",
      fullDescription: "Join Ina's Dance Academy and learn from 5x World Champion Ina Jeliazkova. This exclusive community is designed for ProAm Latin Dancers who want to achieve more freedom and expression on the dance floor. Get personalized coaching, technique workshops, and connect with a passionate community of dancers.",
      members: '457',
      price: '$99/month',
      rank: 4,
      category: 'Hobbies',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20dance%20studio%20with%20elegant%20dancers%20in%20Latin%20dance%20poses%2C%20sophisticated%20ballroom%20environment%20with%20mirrors%20and%20wooden%20floors%2C%20artistic%20dance%20photography&width=400&height=200&seq=7&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Dancing%20couple%20silhouette%20logo%20in%20elegant%20pose%2C%20ballroom%20dance%20icon%20design%2C%20gold%20and%20black%20colors%2C%20graceful%20movement%20symbol&width=100&height=100&seq=8&orientation=squarish',
      features: [
        'Personalized coaching from 5x World Champion',
        'Advanced technique workshops',
        'Video analysis and feedback',
        'Community of passionate ProAm dancers',
        'Exclusive choreography sessions',
      ],
    },
    {
      id: 5,
      slug: '/skoolers/about',
      name: 'Skoolers',
      description: "Private club for skool owners. Let's build communities together.",
      fullDescription: 'Skoolers is a private club exclusively for skool owners. Connect with fellow community builders, share strategies, and learn from successful community leaders. This is your space to collaborate, grow, and build thriving communities together.',
      members: '189k',
      price: 'Free',
      rank: 5,
      category: 'Tech',
      coverImage: 'https://readdy.ai/api/search-image?query=Modern%20community%20building%20workspace%20with%20people%20collaborating%2C%20professional%20networking%20environment%2C%20clean%20contemporary%20office%20space%20with%20natural%20lighting&width=400&height=200&seq=9&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Community%20network%20logo%20with%20connected%20people%20icons%2C%20social%20networking%20symbol%2C%20modern%20blue%20and%20white%20design%2C%20professional%20community%20branding&width=100&height=100&seq=10&orientation=squarish',
      features: [
        'Network with other skool owners',
        'Share best practices and strategies',
        'Access to community building resources',
        'Monthly mastermind sessions',
        'Collaboration opportunities',
      ],
    },
    {
      id: 6,
      slug: '/theladychange/about',
      name: 'The Lady Change',
      description: 'THE #1 community for menopausal (peri & post) women to lose weight, get healthier and regain their confidence!',
      fullDescription: 'The Lady Change is the #1 community dedicated to supporting menopausal (peri & post) women on their journey to better health. Join a supportive community focused on weight loss, wellness, and regaining confidence during this transformative phase of life.',
      members: '1.3k',
      price: '$49/month',
      rank: 6,
      category: 'Health',
      coverImage: 'https://readdy.ai/api/search-image?query=Empowering%20womens%20health%20and%20wellness%20environment%2C%20confident%20mature%20women%20in%20fitness%20setting%2C%20supportive%20community%20atmosphere%20with%20warm%20lighting&width=400&height=200&seq=11&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Feminine%20wellness%20logo%20with%20butterfly%20or%20flower%20symbol%2C%20empowering%20womens%20health%20icon%2C%20pink%20and%20purple%20colors%2C%20elegant%20transformation%20design&width=100&height=100&seq=12&orientation=squarish',
      features: [
        'Specialized health programs for menopause',
        'Nutrition and fitness guidance',
        'Supportive community of women',
        'Expert-led wellness workshops',
        'Confidence-building resources',
      ],
    },
    {
      id: 7,
      slug: '/theaspinallway/about',
      name: 'The Aspinall Way',
      description: 'Join the FIRST and ONLY Community Created by a UFC Champion, Become Extraordinary Today!🥊',
      fullDescription: 'The Aspinall Way is the first and only community created by a UFC Champion. Join this exclusive community to learn from a champion\'s mindset, training methods, and approach to becoming extraordinary. Transform your life with insights from the top of the fighting world.',
      members: '22.5k',
      price: 'Free',
      rank: 7,
      category: 'Sports',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20MMA%20training%20facility%20with%20UFC%20octagon%20and%20fighters%2C%20intense%20martial%20arts%20environment%2C%20dynamic%20sports%20photography%20with%20dramatic%20lighting&width=400&height=200&seq=13&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=UFC%20champion%20fighter%20logo%20with%20boxing%20gloves%2C%20martial%20arts%20emblem%20design%2C%20red%20and%20black%20colors%2C%20powerful%20combat%20sports%20symbol&width=100&height=100&seq=14&orientation=squarish',
      features: [
        'Training insights from UFC Champion',
        'Champion mindset development',
        'Exclusive training content',
        'Community of fighters and enthusiasts',
        'Motivation and inspiration',
      ],
    },
    {
      id: 8,
      slug: '/tom-bilyeu/about',
      name: 'Zero To Founder by Tom Bilyeu',
      description: 'Start your business and get on the path to financial freedom with billion-dollar founder Tom Bilyeu.',
      fullDescription: 'Zero To Founder by Tom Bilyeu is your pathway to entrepreneurship and financial freedom. Learn from a billion-dollar founder who has built successful businesses. Get access to proven strategies, business frameworks, and the mindset needed to start and grow your own business.',
      members: '1.9k',
      price: '$119/month',
      rank: 8,
      category: 'Money',
      coverImage: 'https://readdy.ai/api/search-image?query=Successful%20entrepreneur%20workspace%20with%20modern%20office%20setup%2C%20business%20success%20environment%2C%20professional%20corporate%20atmosphere%20with%20clean%20design&width=400&height=200&seq=15&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Entrepreneur%20success%20logo%20with%20upward%20arrow%20and%20dollar%20sign%2C%20business%20growth%20icon%2C%20gold%20and%20blue%20colors%2C%20professional%20achievement%20symbol&width=100&height=100&seq=16&orientation=squarish',
      features: [
        'Business strategies from billion-dollar founder',
        'Step-by-step entrepreneurship framework',
        'Financial freedom roadmap',
        'Exclusive business content',
        'Community of ambitious entrepreneurs',
      ],
    },
    {
      id: 9,
      slug: '/daybydayclub/about',
      name: 'Day by Day Wellness Club',
      description: '#1 community dedicated to anyone on their journey to becoming their best self.',
      fullDescription: 'Day by Day Wellness Club is the #1 community dedicated to supporting anyone on their journey to becoming their best self. Join a community focused on holistic wellness, personal growth, and daily improvement. Take it one day at a time with support from like-minded individuals.',
      members: '59.8k',
      price: 'Free',
      rank: 9,
      category: 'Self-improvement',
      coverImage: 'https://readdy.ai/api/search-image?query=Peaceful%20wellness%20and%20mindfulness%20environment%20with%20meditation%20space%2C%20serene%20self-improvement%20setting%2C%20natural%20lighting%20and%20calming%20atmosphere&width=400&height=200&seq=17&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Wellness%20lotus%20flower%20logo%20with%20zen%20circle%2C%20mindfulness%20and%20meditation%20icon%2C%20green%20and%20blue%20colors%2C%20peaceful%20spiritual%20symbol&width=100&height=100&seq=18&orientation=squarish',
      features: [
        'Daily wellness practices and routines',
        'Holistic health guidance',
        'Mindfulness and meditation resources',
        'Supportive community for personal growth',
        'Wellness challenges and accountability',
      ],
    },
    {
      id: 10,
      slug: '/unison-producer-growth-hub/about',
      name: 'Unison Producer Growth Hub',
      description: 'The #1 free community for music producers to grow, learn, connect and simplify the process of producing pro-quality music.',
      fullDescription: 'Unison Producer Growth Hub is the #1 free community for music producers. Whether you\'re just starting or looking to take your production to the next level, this community provides resources, connections, and knowledge to help you produce professional-quality music. Simplify your workflow and grow as a producer.',
      members: '38.1k',
      price: 'Free',
      rank: 10,
      category: 'Music',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20music%20production%20studio%20with%20mixing%20console%20and%20monitors%2C%20creative%20audio%20workspace%2C%20modern%20recording%20equipment%20with%20atmospheric%20lighting&width=400&height=200&seq=19&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Music%20production%20logo%20with%20sound%20waves%20and%20headphones%2C%20audio%20engineering%20icon%2C%20purple%20and%20orange%20colors%2C%20creative%20music%20symbol&width=100&height=100&seq=20&orientation=squarish',
      features: [
        'Music production tutorials and guides',
        'Industry tips and techniques',
        'Producer networking opportunities',
        'Workflow optimization resources',
        'Community feedback on your tracks',
      ],
    },
    {
      id: 11,
      slug: '/the-acting-lab/about',
      name: 'The Acting Lab',
      description: 'Learn the craft and business of the acting industry from professionals seen on Stranger Things, Law & Order & much more!',
      fullDescription: 'The Acting Lab is where you learn both the craft and business of acting from industry professionals. Our instructors have appeared in hit shows like Stranger Things, Law & Order, and many more. Get real-world insights into auditions, acting techniques, and building a successful acting career.',
      members: '182',
      price: '$199/month',
      rank: 11,
      category: 'Hobbies',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20acting%20studio%20with%20stage%20lights%20and%20theater%20setup%2C%20dramatic%20performance%20environment%2C%20creative%20arts%20space%20with%20professional%20lighting&width=400&height=200&seq=21&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Theater%20masks%20logo%20with%20drama%20and%20comedy%20faces%2C%20acting%20performance%20icon%2C%20red%20and%20gold%20colors%2C%20classic%20theatrical%20symbol&width=100&height=100&seq=22&orientation=squarish',
      features: [
        'Acting classes from industry professionals',
        'Audition preparation and techniques',
        'Business of acting guidance',
        'Industry connections and networking',
        'Exclusive workshops and masterclasses',
      ],
    },
    {
      id: 12,
      slug: '/schoolofmentors/about',
      name: 'School of Mentors',
      description: 'The #1 Community in the World for Entrepreneurs and Get Mentored Every Week by the Millionaires and Billionaires that We Interview',
      fullDescription: 'School of Mentors is the #1 community in the world for entrepreneurs. Get mentored every week by the millionaires and billionaires we interview. Learn from the best, get direct access to successful entrepreneurs, and accelerate your business growth with insights from those who have achieved extraordinary success.',
      members: '5.6k',
      price: '$49/month',
      rank: 12,
      category: 'Money',
      coverImage: 'https://readdy.ai/api/search-image?query=Executive%20mentorship%20meeting%20room%20with%20successful%20business%20leaders%2C%20professional%20networking%20environment%2C%20luxury%20corporate%20setting%20with%20modern%20design&width=400&height=200&seq=23&orientation=landscape',
      logoImage: 'https://readdy.ai/api/search-image?query=Mentorship%20handshake%20logo%20with%20growth%20arrow%2C%20business%20coaching%20icon%2C%20navy%20blue%20and%20gold%20colors%2C%20professional%20guidance%20symbol&width=100&height=100&seq=24&orientation=squarish',
      features: [
        'Weekly mentorship from millionaires and billionaires',
        'Exclusive interviews and insights',
        'Direct access to successful entrepreneurs',
        'Business growth strategies',
        'Networking with high-achievers',
      ],
    },
  ]

  // Find the community by slug (handle both with and without /about)
  // Extract base slug from URL parameter (e.g., "thatpickleballschool" from "/thatpickleballschool/about")
  const getBaseSlug = (slugPath) => {
    if (!slugPath) return ''
    return slugPath.replace('/about', '').replace(/^\//, '').split('/').pop()
  }
  
  const baseSlug = getBaseSlug(slug)
  const community = allCommunities.find((c) => {
    const communityBaseSlug = getBaseSlug(c.slug)
    return communityBaseSlug === baseSlug || c.slug === slug || c.slug === `/${baseSlug}/about`
  })

  if (!community) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Community Not Found</h1>
          <p className="text-gray-600 mb-6">The community you're looking for doesn't exist.</p>
          <div className="flex justify-center">
            <CommonGradientButton
              onClick={() => router.push('/communities')}
              icon={<FiArrowLeft />}
              iconPosition="left"
            >
              Back to Communities
            </CommonGradientButton>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.push('/communities')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <FiArrowLeft className="text-lg" />
        <span className="text-sm font-medium">Back to Communities</span>
      </button>

      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          alt={community.name}
          className="w-full h-64 md:h-80 object-cover"
          src={community.coverImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <img
              alt={`${community.name} logo`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
              src={community.logoImage}
            />
            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold">{community.name}</h1>
                <span className="bg-black/50 text-white text-xs font-bold px-2 py-1 rounded">
                  #{community.rank}
                </span>
              </div>
              <p className="text-sm md:text-base text-white/90 mb-3">{community.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <FiUsers className="text-base" />
                  <span>{community.members} Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiDollarSign className="text-base" />
                  <span className="font-semibold">{community.price}</span>
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                  {community.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About This Community</h2>
            <p className="text-gray-600 leading-relaxed">
              {community.fullDescription || community.description}
            </p>
          </div>

          {/* Features Section */}
          {community.features && community.features.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What You'll Get</h2>
              <ul className="space-y-3">
                {community.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheck className="text-primary text-lg mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">{community.price}</div>
              <p className="text-sm text-gray-500">per month</p>
            </div>
            <CommonGradientButton
              fullWidth
              size="md"
              className="mb-4"
            >
              Join Community
            </CommonGradientButton>
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Members</span>
                <span className="text-sm font-semibold text-gray-900">{community.members}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Category</span>
                <span className="text-sm font-semibold text-gray-900">{community.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Rank</span>
                <span className="text-sm font-semibold text-gray-900">#{community.rank}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverDetailSection

