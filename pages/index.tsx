import Image from 'next/image'
import ImageBackground from '../public/assets_login/img-login.png'
import Ftclogo from '../public/assets_login/ftc-logo.svg'
import { SetStateAction, useState } from 'react';
import axios from 'axios';


interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  const inputStyle = "h-7 w-full mt-1 mb-2 outline-none border border-b-2 border-b-slate-300 rounded-md py-4 px-2 bg-transparent"

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChangeUsername = (e: any) => {
    e.preventDefault()
    setUsername(e.target.value)
  }
  const handleChangePassword = (e: any) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handlerClickConnect = (e: any) => {
    e.preventDefault()
    axios.post('http://localhost:8000/auth/signin', {
      login: username,
      password
    })
      .then(data => {
        console.log("API Data:", data)
      })
      .catch(e => {
        console.log("API Error:", e)
      })
  }

  return <div className='flex items-center justify-center w-full h-screen text-black text-sm font-light bg-blue-50'>
    {children}

    <div className="flex items-center flex-col justify-center w-full">

      <Image
        src={Ftclogo}
        quality={100}
        alt="Logo da FTC"
        className="w-1/2 mb-2"
      />

      <div
        className='w-48 relative'
      >
        <label
          className='mb-6 font-normal'
          htmlFor="username">Usuário:</label><br></br>
        <input
          type="email"
          name="username"
          id="username"
          onChange={handleChangeUsername}
          value={username}
          className={inputStyle} /><br></br>

        <label
          className='mb-6 font-normal'
          htmlFor="password">Senha:</label><br></br>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChangePassword}
          value={password}
          className={inputStyle} />
        <button
          className="bg-blue-600 text-white font-semibold w-full h-8 rounded-md mt-4 active:bg-blue-800"
          onClick={handlerClickConnect}
        >Conectar
        </button>
      </div>

    </div>
    <div className="items-center w-full h-full hidden sm:flex">
      <Image
        className="w-full h-full"
        src={ImageBackground}
        alt="Mulher sorrindo, olhando para trás, segurando uma mão."
        quality={100}
        objectFit="fill" />
    </div>
  </div>
}

export default HomeLayout