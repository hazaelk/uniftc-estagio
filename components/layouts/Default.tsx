import Image from 'next/image'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function DefaultLayout({children}: Props) {
  return (
    <div>
      <nav className='relative flex items-center w-full px-2 py-4 text-white bg-blue-600'>
        <div className='relative flex items-center justify-center'>
          <Image src='/ftc_logo_c.png' alt='Logo FTC' className="w-8 h-8" width={32} height={32} />
        </div>
        <ul className='absolute flex font-semibold text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2' >
          <li className='mx-4 transition-opacity duration-300 cursor-pointer opacity-70 hover:opacity-100'>Início</li>
          <li className='mx-4 transition-opacity duration-300 cursor-pointer opacity-70 hover:opacity-100'>Cursos</li>
          <li className='mx-4 transition-opacity duration-300 cursor-pointer opacity-70 hover:opacity-100'>Sobre</li>
        </ul>
        <div className='ml-auto'>
          <div className='flex items-center h-full px-4 py-2 duration-300 rounded-md cursor-pointer hover:bg-opacity-10 hover:bg-white'>
            <span className='mr-3 font-semibold'>Fulano silva</span>
            <Image src='/user_placeholder.png' alt='Foto usuário' className="w-8 h-8" width={32} height={32} />
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout