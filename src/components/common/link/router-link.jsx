import { Link } from 'react-router-dom'

/**
 * Common Router Link Component
 * 
 * Automatically handles both internal routes and external links.
 * - Internal routes: Uses React Router's Link component
 * - External links: Uses standard anchor tag with proper attributes
 * 
 * @param {string} to - The path or URL to navigate to
 * @param {string} className - CSS classes to apply
 * @param {React.ReactNode} children - Link content
 * @param {boolean} external - Force external link behavior (optional, auto-detected if not provided)
 * @param {string} target - Target attribute for external links (default: '_blank')
 * @param {string} rel - Rel attribute for external links (default: 'noopener noreferrer')
 * @param {object} ...props - Any other props to pass to the link component
 */
const RouterLink = ({
  to,
  className = '',
  children,
  external = null,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}) => {
  // Auto-detect external links if not explicitly set
  const isExternal =
    external !== null
      ? external
      : typeof to === 'string' && (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:'))

  // Handle external links
  if (isExternal) {
    return (
      <a
        href={to}
        className={className}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    )
  }

  // Handle internal routes
  return (
    <Link
      to={to}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}

export default RouterLink

