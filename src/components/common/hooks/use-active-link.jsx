import { useRouter } from './use-router'
import { hasParams, removeParams, isExternalLink, removeLastSlash } from '../utils'

// ----------------------------------------------------------------------

/**
 * Hook to check if a link is active based on current pathname
 * 
 * @param {string} itemPath - The path to check against
 * @param {boolean} deep - If true, matches child routes (default: true)
 * @returns {boolean} - True if the link is active
 * 
 * @example
 * const isActive = useActiveLink('/dashboard', true)
 * // Returns true for: '/dashboard', '/dashboard/user', '/dashboard/user/123'
 */
export function useActiveLink(itemPath, deep = true) {
  const router = useRouter()
  const pathname = removeLastSlash(router.pathname)

  const pathHasParams = hasParams(itemPath);

  /* Start check */
  const notValid = itemPath.startsWith('#') || isExternalLink(itemPath);

  if (notValid) {
    return false;
  }
  /* End check */

  /**
   * [1] Apply for Item has children or has params.
   */
  const isDeep = deep || pathHasParams;

  // console.info(isDeep ? '[deep]   :' : '[normal] :', itemPath, '-?-', pathname);

  if (isDeep) {
    /**
     * [1] Deep: default
     * @itemPath 			 = '/dashboard/user'
     * @match pathname = '/dashboard/user'
     * @match pathname = '/dashboard/user/list'
     * @match pathname = '/dashboard/user/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b15/edit'
     */
    const defaultActive = pathname.includes(itemPath);

    /**
     * [1] Deep: has params
     * @itemPath 			 = '/dashboard/test?id=e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1'
     * @match pathname = '/dashboard/test'
     */

    const originItemPath = removeParams(itemPath);

    const hasParamsActive = pathHasParams && originItemPath === pathname;

    return defaultActive || hasParamsActive;
  }

  /**
   * [1] Normal: active
   * @itemPath 			 = '/dashboard/calendar'
   * @match pathname = '/dashboard/calendar'
   */
  return pathname === itemPath;
}
