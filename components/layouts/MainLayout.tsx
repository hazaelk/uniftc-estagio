import { Children } from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ( { children }:Props ) => {
  return <div className='flex items-center justify-center w-full h-screen text-white bg-black'>
    {/* TODO: Criar layout padrão. */}
    {children}
  </div>
}

export default MainLayout