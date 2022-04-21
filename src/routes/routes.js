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
  {
    id: 'Game',
    path: '/game',
    component: lazy(() => import('../views/pages/Game/Game')),
    isProtected: true,
  },
]
