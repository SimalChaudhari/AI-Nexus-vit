import { useState } from 'react'
import { PiEyeClosedBold } from "react-icons/pi";
import { HiMiniEye } from "react-icons/hi2";
import { TextField, InputAdornment, IconButton } from '@mui/material'

function InputComponent({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  multiline = false,
  rows = 1,
  fullWidth = true,
  variant = 'outlined',
  error,
  helperText,
  disabled = false,
  startAdornment,
  endAdornment,
  sx,
}) {
  const isPassword = type === 'password'
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const inputType = isPassword && showPassword ? 'text' : type
  const passwordToggle = isPassword ? (
    <IconButton
      onClick={handleTogglePassword}
      edge="end"
      aria-label={showPassword ? 'Hide password' : 'Show password'}
      sx={{
        color: '#443C68',
        transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out',
        '&:hover': {
          color: '#443C68',
          transform: 'scale(1.1)',
          // backgroundColor: 'rgba(68, 60, 104, 0.08)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      }}
    >
      {showPassword ? <PiEyeClosedBold size={20} /> : <HiMiniEye size={20} />}
    </IconButton>
  ) : null

  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      name={name}
      type={inputType}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      variant={variant}
      error={error}
      helperText={helperText}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      InputProps={{
        startAdornment: startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>,
        endAdornment: endAdornment || passwordToggle ? (
          <InputAdornment position="end">
            {endAdornment || passwordToggle}
          </InputAdornment>
        ) : null,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          bgcolor: '#edeaff',
          borderRadius: '8px',
          fontFamily: "'Montserrat', sans-serif",
          transition: 'all 0.3s ease-in-out',
          '& fieldset': {
            borderColor: '#443C68 !important',
            borderRadius: '8px',
            transition: 'border-color 0.3s ease-in-out, border-width 0.3s ease-in-out',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#443C68 !important',
            borderRadius: '8px',
            transition: 'border-color 0.3s ease-in-out, border-width 0.3s ease-in-out',
          },
          '&:hover fieldset': {
            borderColor: '#635985 !important',
            borderWidth: '1.5px !important',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#635985 !important',
            borderWidth: '1.5px !important',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#443C68 !important',
            borderWidth: '2px !important',
            boxShadow: '0 0 0 3px rgba(68, 60, 104, 0.1)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#443C68 !important',
            borderWidth: '2px !important',
          },
          '&.Mui-error fieldset': {
            borderColor: '#ff5630 !important',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff5630 !important',
          },
          '&.Mui-error:hover fieldset': {
            borderColor: '#ff5630 !important',
          },
          '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff5630 !important',
          },
          '&.Mui-error.Mui-focused fieldset': {
            borderColor: '#ff5630 !important',
            boxShadow: '0 0 0 3px rgba(255, 86, 48, 0.1)',
          },
          '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff5630 !important',
          },
          '&.Mui-disabled': {
            bgcolor: 'rgba(0, 0, 0, 0.04)',
            cursor: 'not-allowed',
            '& fieldset': {
              borderColor: '#443C68 !important',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#443C68 !important',
            },
            '&:hover fieldset': {
              borderColor: '#443C68 !important',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#443C68 !important',
            },
          },
        },
        '& .MuiInputLabel-root': {
          color: '#635985',
          fontFamily: "'Montserrat', sans-serif",
          transition: 'color 0.3s ease-in-out, transform 0.2s ease-in-out',
          '&.Mui-focused': {
            color: '#443C68',
            fontWeight: 600,
          },
          '&.Mui-error': {
            color: '#ff5630',
          },
          '&.Mui-disabled': {
            color: '#635985',
          },
        },
        '& .MuiInputBase-input': {
          color: '#393053',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          padding: '14px 16px',
          transition: 'color 0.2s ease-in-out',
          '&::placeholder': {
            color: '#635985',
            opacity: 0.7,
            fontWeight: 400,
            transition: 'opacity 0.2s ease-in-out',
          },
          '&:focus::placeholder': {
            opacity: 0.5,
          },
          '&:disabled': {
            color: '#635985',
            WebkitTextFillColor: '#635985',
          },
        },
        '& .MuiOutlinedInput-root.Mui-error .MuiInputBase-input': {
          color: '#ff5630',
        },
        '& .MuiFormHelperText-root': {
          color: '#635985',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.75rem',
          marginTop: '6px',
          transition: 'color 0.2s ease-in-out',
          '&.Mui-error': {
            color: '#ff5630',
          },
        },
        '& .MuiInputAdornment-root': {
          '& .MuiIconButton-root': {
            transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
          },
        },
        ...sx,
      }}
    />
  );
}

export default InputComponent;

