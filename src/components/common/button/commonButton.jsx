import { Button } from '@mui/material'

function CommonButton({
  children,
  onClick,
  className = '',
  disabled = false,
  width = '100%',
  height = '50px',
  variant = 'contained',
  type = 'button',
  fullWidth = true,
  sx,
}) {
  // Check if className has width/height Tailwind classes (w-, w-[, h-, h-[)
  const hasWidthClass = /\bw-|w\[|width/i.test(className)
  const hasHeightClass = /\bh-|h\[|height/i.test(className)

  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      fullWidth={fullWidth && !hasWidthClass}
      className={`AnimatedBtn ${className}`}
      sx={{
        ...(!hasWidthClass && { width: fullWidth ? '100%' : width }),
        ...(!hasHeightClass && { height: height }),
        padding: '12px 24px',
        borderRadius: '9999px',
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: '#443C68',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '0.875rem',
        textTransform: 'capitalize',
        letterSpacing: '0.05em',
        border: '2px solid transparent',
        transition: 'color 0.3s ease',
        '&:hover': {
          backgroundColor: '#443C68',
          color: '#443C68',
          border: '2px solid #443C68',
        },
        '&:disabled': {
          backgroundColor: '#443C68',
          opacity: 0.6,
          border: '2px solid transparent',
          '&:hover': {
            backgroundColor: '#443C68',
            color: '#ffffff',
            border: '2px solid transparent',
          },
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  )
}

export default CommonButton