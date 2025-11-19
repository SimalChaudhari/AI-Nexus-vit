import { useState, useEffect, useRef } from 'react'
import { CommonContainer } from '../../components'

const CounterSection = () => {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)
  const intervalsRef = useRef([])

  const counters = [
    { value: '50K+', label: 'AI Enthusiasts', target: 50, suffix: 'K+' },
    { value: '1,200+', label: 'AI Communities', target: 1200, suffix: '+' },
    { value: '25K+', label: 'Learning Modules', target: 25, suffix: 'K+' },
    { value: '10K+', label: 'AI Workflows', target: 10, suffix: 'K+' },
  ]

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps
      const intervals = []

      counters.forEach((counter, index) => {
        let currentStep = 0
        const increment = counter.target / steps

        const interval = setInterval(() => {
          currentStep++
          const newValue = Math.min(
            Math.floor(increment * currentStep),
            counter.target
          )

          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = newValue
            return newValues
          })

          if (currentStep >= steps) {
            clearInterval(interval)
            // Ensure final value is exact
            setAnimatedValues((prev) => {
              const newValues = [...prev]
              newValues[index] = counter.target
              return newValues
            })
          }
        }, stepDuration)

        intervals.push(interval)
      })

      return () => {
        intervals.forEach((interval) => clearInterval(interval))
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const cleanup = animateCounters()
            return cleanup
          }
        })
      },
      { threshold: 0.9 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const formatValue = (value, suffix) => {
    if (suffix === 'K+') {
      return `${value}${suffix}`
    } else if (suffix === '+') {
      // Format with comma for thousands
      return `${value.toLocaleString()}${suffix}`
    }
    return `${value}${suffix}`
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary to-secondary"
    >
      <CommonContainer>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {counters.map((counter, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl font-bold mb-2">
                {formatValue(animatedValues[index], counter.suffix)}
              </div>
              <div className="text-lg opacity-90">{counter.label}</div>
            </div>
          ))}
        </div>
      </CommonContainer>
    </section>
  )
}

export default CounterSection

