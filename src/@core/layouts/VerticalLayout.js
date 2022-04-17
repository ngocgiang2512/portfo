// ** React Imports
// import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// // ** Store & Actions
// import { useSelector, useDispatch } from 'react-redux'
// import { handleMenuCollapsed, handleContentWidth, handleMenuHidden } from '@store/actions/layout'

// // ** Third Party Components
// import classnames from 'classnames'
// import { ArrowUp } from 'react-feather'
// import ScrollToTop from 'react-scroll-up'
// import { Button } from 'reactstrap'

// // ** Configs
// import themeConfig from '@configs/themeConfig'

// // ** Custom Components
// import Customizer from '@components/customizer'
// import FooterComponent from './components/footer'
// import NavbarComponent from './components/navbar'
// import SidebarComponent from './components/menu/vertical-menu'

// // ** Custom Hooks
// import { useRTL } from '@hooks/useRTL'
// import { useSkin } from '@hooks/useSkin'
// import { useNavbarType } from '@hooks/useNavbarType'
// import { useFooterType } from '@hooks/useFooterType'
// import { useNavbarColor } from '@hooks/useNavbarColor'

// // ** Styles
// import '@styles/base/core/menu/menu-types/vertical-menu.scss'
// import '@styles/base/core/menu/menu-types/vertical-overlay-menu.scss'

import { NavLink } from 'react-router-dom'
import navigationItems from '@src/navigation';

const VerticalLayout = props => {
  // ** Props
  const { children } = props
  return (
    <div className="vertical-layout h-100 vertical-menu-modern menu-expanded navbar-floating footer-static">
      <div className="main-menu">
        <h1 className="site-title">Kokonatsu</h1>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.title}>
              <NavLink to={item.navLink}>
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="app-content">
        {children}
      </div>
    </div>
  )
}

export default VerticalLayout
