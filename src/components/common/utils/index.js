/**
 * Utility functions for route and path manipulation
 */

/**
 * Check if a path has query parameters
 * @param {string} path - The path to check
 * @returns {boolean}
 */
export function hasParams(path) {
  if (!path) return false
  return path.includes('?') || path.includes('#')
}

/**
 * Remove query parameters and hash from a path
 * @param {string} path - The path to clean
 * @returns {string}
 */
export function removeParams(path) {
  if (!path) return ''
  return path.split('?')[0].split('#')[0]
}

/**
 * Check if a link is external
 * @param {string} path - The path to check
 * @returns {boolean}
 */
export function isExternalLink(path) {
  if (!path) return false
  return (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  )
}

/**
 * Remove trailing slash from a path
 * @param {string} path - The path to clean
 * @returns {string}
 */
export function removeLastSlash(path) {
  if (!path) return ''
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
}

