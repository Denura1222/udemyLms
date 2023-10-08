"use client";

import React, { useReducer } from 'react'
import {LucideIcon} from "lucide-react"
import { usePathname, useRouter } from 'next/navigation';

interface itemProps{
    href:string,
    label:string,
    icon:LucideIcon
}

const sideBarItem:React.FC<itemProps> = ({
    href,
    label,
    icon:Icon
}) => {

  const router = useRouter();
  const pathname = usePathname();

  const isActive =
  (pathname === "/" && href === "/") ||
  pathname === href ||
  pathname?.startsWith(`${href}/`);


  
  const onClick=()=>{

    router.push(href)

  }



  return (
    <button type='button' onClick={onClick} className={`p-3 flex items-center text-slate-500 hover:text-slate-600 hover:bg-slate-300/20`}>
        <div className='flex flex-row gap-3'>
          <Icon/>
          <h1>{label}</h1>
          </div>
    </button>
  )
}

export default sideBarItem