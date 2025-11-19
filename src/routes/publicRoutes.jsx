import Layout from '../components/layout/layout'
import HomePage from '../pages/home'
import LearningPage from '../pages/learning'
import CommunitiesPage from '../pages/communities'
import CommunityDetailPage from '../pages/communities/detail'
import WorkflowsPage from '../pages/workflows'
import LoginPage from '../pages/auth/login'
import RegisterPage from '../pages/auth/register'
import ForgotPasswordPage from '../pages/auth/forgotpassword'
import ResetPasswordPage from '../pages/auth/resetpassword'
import NotFoundPage from '../pages/not-found'

export const publicRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'learning',
        element: <LearningPage />,
      },
      {
        path: 'communities',
        element: <CommunitiesPage />,
      },
      {
        path: 'communities/:slug',
        element: <CommunityDetailPage />,
      },
      {
        path: 'communities/:slug/about',
        element: <CommunityDetailPage />,
      },
      {
        path: 'workflows',
        element: <WorkflowsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

