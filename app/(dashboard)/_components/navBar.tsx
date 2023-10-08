import React from 'react'
import MobileSidebar from './mobileSidebar'
import NavBarRoutes from './navBarRoutes'

const navBar = () => {
  return  (

    <div className='border-b h-full flex items-center p-4 shadow-sm'>
        <MobileSidebar/>
        <NavBarRoutes/>
    </div>
  )
}

export default navBar