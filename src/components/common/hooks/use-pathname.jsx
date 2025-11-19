import { useRouter } from './use-router'

// ----------------------------------------------------------------------

/**
 * Hook to get the current pathname
 * 
 * @returns {string} - Current pathname
 * 
 * @example
 * const pathname = usePathname()
 * // Returns: '/dashboard' or '/communities'
 * 
 * @deprecated Use useRouter().pathname instead for better consistency
 */
export function usePathname() {
  const router = useRouter()
  return router.pathname
}
