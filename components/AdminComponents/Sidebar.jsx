import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border'>
            <Image src={assets.logo} alt='logo' width={120} />
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
            <div className='w-[50%] sm:w-[80%] absolute right-0'>
            <Link href="/admin/addBlog" className='flex items-centerborder border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.add_icon} alt='add_icon' width={28} />
                <p>Add Blog</p>
            </Link>
            <Link href='/admin/blogList' className='flex mt-5 items-centerborder border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.blog_icon} alt='add_icon' width={28} />
                <p>Blog List</p>
            </Link>
            <Link href="/admin/subscriptions" className='flex mt-5 items-centerborder border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.email_icon} alt='add_icon' width={28} />
                <p>Subscription</p>
            </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar