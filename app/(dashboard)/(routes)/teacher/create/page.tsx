"use client"

import React from 'react'
import axios from 'axios'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import {useRouter} from "next/navigation"
import toast from 'react-hot-toast'

const formSchema = z.object({
    title: z.string().min(2, { message: "title is required" }).max(50),
})


const page = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    })

    const onSubmit= async(values: z.infer<typeof formSchema>)=> {

        try {
            const response = await axios.post("/api/course",values)
            router.push(`/teacher/course/${response.data.id}`)
            
        } catch (error) {

            toast.error("something went wrong!")

            
        }

       
    }

    return (
        <div className='flex w-full h-full flex-col items-center justify-center mx-auto'>

        <div>
        <div className='mb-5'>
                <h1 className='font-bold text-xl'>Name your course</h1>
                <p>what would you like to name your course ? Dont worry,you can change this later</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Course title</FormLabel>
                                <FormControl>
                                    <Input placeholder="ex : software engineering" {...field} />
                                </FormControl>
                                <FormDescription>
                                    what will you teach in this course
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">continue</Button>
                </form>
            </Form>
        </div>
        </div>
    )
}

export default page