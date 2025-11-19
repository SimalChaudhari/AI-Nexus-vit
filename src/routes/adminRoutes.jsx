import AdminLayout from '../components/layout/admin/layout'
import HomePage from '../pages/home'
import LearningPage from '../pages/learning'
import SettingsPage from '../pages/settings'

export const adminRoutes = [
  {
    path: '/admin',
    element: <AdminLayout />,
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
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]

