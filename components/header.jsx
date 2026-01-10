import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Header() {
  return (
    <>
     <nav className='fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-20 border-b'>
          <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            <Link href={'/'} className='flex items-center'>
            {/* serach & location desktop*/}
                <Image 
                alt='main logo'
                src={"/spott.png"} width={500} height={500}
                className=' w-full h-12'
                priority
                />
                {/* Pro badge */}
            </Link>
            {/* search location */}

            {/*right side action */}
            <div className='flex items-center'>
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
          </div>
          {/*mobile search */}
     </nav>
      {/*models  as a placeholder*/}
    </>
  )
}

