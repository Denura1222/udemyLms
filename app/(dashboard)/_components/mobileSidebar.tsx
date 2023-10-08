import React from 'react'
import { Menu } from 'lucide-react'
import SideBar from './sideBar'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
const mobileSidebar = () => {
  return (
    <Sheet>
            <SheetTrigger className='md:hidden pr-4 hover-75 transition'>
            <Menu/>
            </SheetTrigger>
            <SheetContent side='left' className='p-0 bg-white'>
            <SideBar/>
            </SheetContent>

    </Sheet>
  )
}

export default mobileSidebar