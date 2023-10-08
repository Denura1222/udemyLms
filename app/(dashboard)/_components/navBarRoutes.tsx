"use client"

import React from 'react'
import { UserButton } from '@clerk/nextjs'
import {useRouter,usePathname } from "next/navigation"
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import {Button} from "@/components/ui/button"

const navBarRoutes = () => {

    const pathname = usePathname();
    const router = useRouter();

    console.log(pathname)

    const isTeacher = pathname?.startsWith("/teacher")
    const isPlayerPage = pathname?.includes("/chapter")
  return (
    <div className='flex justify-end gap-3 w-full'>
        {isTeacher || isPlayerPage ? (

            <Button size='sm' variant="ghost" className='mr-2'>
                <LogOut className='mr-2'/>
                Exit
            </Button>


        ):(

            <Link href="/teacher/courses">
                <Button size='sm' variant="ghost">
                    Teacher mode
                </Button>
            </Link>


        )}
        <UserButton afterSignOutUrl='/'/>
        
    </div>

  )

}

export default navBarRoutes