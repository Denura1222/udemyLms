"use client"
import React from 'react'
import { Layout } from 'lucide-react'
import { Compass,BarChart,List } from 'lucide-react'
import { usePathname } from 'next/navigation'

import SideBarItem from './sideBarItem'
import { link } from 'fs'
import { list } from 'postcss'

const GuestRoute =[

  {
    icon:Layout,
    label:"Dashboard",
    href:"/"
  },
  {
    icon:Compass,
    label:"Browse",
    href:"/search"

  }

]
const teacherRoutes =[

  {
    icon:List,
    label:"courses",
    href:"/teacher/courses"
  },
  {
    icon:BarChart,
    label:"analytics",
    href:"/teacher/analytics"

  }

]



const SideBarRoute = () => {

  const pathname = usePathname()

  const isTeacher = pathname.startsWith('/teacher')

  const route = isTeacher?teacherRoutes:GuestRoute
  return (
    <div className='flex flex-col gap-4'>
      {route.map((route)=>(

        <SideBarItem href={route.href} icon={route.icon} label={route.label}/>

      ))}
    </div>
  )
}

export default SideBarRoute