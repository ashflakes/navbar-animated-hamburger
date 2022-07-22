import { Logo } from '../logo/Logo'
import { NavLinks } from './NavLinks'
import { Accessibility } from './Accessibility'
import { useMediaQuery } from 'react-responsive'
import { DeviceSize } from '../responsive'
import { MobileNavLinks } from './MobileNavLinks'

import './Navbar.css'

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

  return (
    <div className='navbar-container'>
      <div className='left-section'>
        <Logo />
      </div>
      <div className='middle-section'>
        {!isMobile && <NavLinks />}
      </div>
      <div className='right-section'>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />} 
      </div>       
    </div>
  )
}

