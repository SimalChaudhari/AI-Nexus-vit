import { useMemo } from 'react'
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom'

// ----------------------------------------------------------------------

/**
 * Custom hook for router navigation and utilities
 * 
 * Provides a consistent API for navigation and access to router state
 * 
 * @returns {Object} Router object with navigation methods and state
 * @returns {Function} router.back - Navigate back in history
 * @returns {Function} router.forward - Navigate forward in history
 * @returns {Function} router.refresh - Refresh the current page
 * @returns {Function} router.push - Navigate to a new route (adds to history)
 * @returns {Function} router.replace - Replace current route (doesn't add to history)
 * @returns {string} router.pathname - Current pathname
 * @returns {Object} router.params - Current route parameters
 * @returns {Object} router.query - Current URL search parameters
 * @returns {Function} router.setQuery - Update URL search parameters
 * 
 * @example
 * const router = useRouter()
 * router.push('/dashboard')
 * router.replace('/login')
 * router.back()
 */
export function useRouter() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const router = useMemo(
    () => ({
      // Navigation methods
      back: () => {
        navigate(-1)
      },
      forward: () => {
        navigate(1)
      },
      refresh: () => {
        navigate(0)
      },
      push: (href, options = {}) => {
        navigate(href, options)
      },
      replace: (href, options = {}) => {
        navigate(href, { ...options, replace: true })
      },
      
      // Router state
      pathname: location.pathname,
      params,
      query: Object.fromEntries(searchParams),
      
      // Query utilities
      setQuery: (newQuery, options = {}) => {
        const { replace = false } = options
        setSearchParams(newQuery, { replace })
      },
      getQuery: (key) => {
        return searchParams.get(key)
      },
      hasQuery: (key) => {
        return searchParams.has(key)
      },
    }),
    [navigate, location.pathname, params, searchParams, setSearchParams]
  )

  return router
}
