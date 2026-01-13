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
import { Button } from './ui/button'

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
                <SignInButton mode='modal'>
                
                  <Button size='sm'>sign in</Button>
                </SignInButton>
                
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

