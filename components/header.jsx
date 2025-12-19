import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
            </Link>
            {/*right side action */}
          </div>
          {/*mobile search */}
     </nav>
      {/*models  as a placeholder*/}
    </>
  )
}

