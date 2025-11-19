import React from 'react'

function CommonGradientButton({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  size = 'md', // 'sm', 'md', 'lg'
  fullWidth = false,
  icon,
  iconPosition = 'left', // 'left' or 'right'
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const iconSize = {
    sm: 16,
    md: 18,
    lg: 20,
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` AnimatedGradientBtn
        font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap
        bg-gradient-to-r from-primary to-secondary text-white
        hover:shadow-lg
        disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
        flex items-center justify-center gap-2
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
    
    {/* hover:shadow-lg transform hover:scale-105 active:scale-95 */}
      {icon && iconPosition === 'left' && (
        <span className="flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  )
}

export default CommonGradientButton

