import React from 'react'

function CommonContainer({ children, className = '', maxWidth = 'max-w-7xl', padding = 'py-8' }) {
  return (
    <div className={`mx-auto ${maxWidth} w-full px-4 sm:px-6 lg:px-8 ${padding} ${className}`}>
      {children}
    </div>
  )
}

export default CommonContainer

