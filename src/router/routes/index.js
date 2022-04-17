import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/mine-sweeper',
    component: lazy(() => import('../../views/MineSweeper/MineSweeper'))
  },
  {
    path: '/fetch-images',
    component: lazy(() => import('../../views/Fetch'))
  },
  {
    path: '/forecast',
    component: lazy(() => import('../../views/Forecast/Forecast'))
  },
  {
    path: '/typography',
    component: lazy(() => import('../../views/Typography'))
  },
  {
    path: '/colors',
    component: lazy(() => import('../../views/Colors'))
  },
  {
    path: '/reactfeather',
    component: lazy(() => import('../../views/Feathers'))
  },
  {
    path: '/button',
    component: lazy(() => import('../../views/Button'))
  },
  {
    path: '/breadcrumb',
    component: lazy(() => import('../../views/Breadcrumb'))
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
