import React from 'react'
import Image from 'next/image'
import SideBarRoute from './sideBarRoute'


const sideBar = () => {
  return (
    <div className='h-full  border-r flex flex-col overflow-y-auto  shadow-sm m-5'>

        <div className='p-5 m-5'>
            <Image src='/logoipsum-297.svg' height={130} width={130} alt='logo'/>
        </div>
        <div>
          <SideBarRoute/>
        </div>
        
    </div>
  )
}

export default sideBar