import { Toaster as SonnerToaster } from 'sonner'

const ToastNotification = (props) => {
  return (
    <SonnerToaster
      className="gud-sonner"
      position="top-right"
      richColors
      closeButton
      duration={2000}
      {...props}
    />
  )
}

export default ToastNotification

