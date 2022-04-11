import { lazy } from 'react'

export const routeConfig = [
  {
    id: 'HomePage',
    path: '/',
    component: lazy(() => import('../views/pages/HomePage/HomePage')),
    isProtected: false,
  },
  {
    id: 'ProfilePage',
    path: '/profile',
    component: lazy(() => import('../views/pages/Profile/Profile')),
    isProtected: true,
  },
]
