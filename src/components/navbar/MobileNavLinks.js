import React, { useState } from 'react'
import { MenuToggle } from './MenuToggle';
import { Accessibility } from './Accessibility';

export const MobileNavLinks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='mobile-nav-links-container'>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
        <ul className='mobile-links-wrapper'>
            <li className='mobile-link-item'><a className='mobile-link' href="#">About Us</a></li>
            <li className='mobile-link-item'><a className='mobile-link' href="#">How it Works</a></li>
            <li className='mobile-link-item'><a className='mobile-link' href="#">Explore</a></li>
            <li className='mobile-link-item'><a className='mobile-link' href="#">Contact</a></li>
            <Accessibility />
        </ul>)}
    </div>
  )
}
