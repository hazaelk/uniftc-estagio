import Image from 'next/image'
import ImageBackground from '../public/assets_login/img-login.png'
import Ftclogo from '../public/assets_login/ftc-logo.svg'
import { useState } from 'react';
import axios from 'axios';
import RegisterUser from '@/components/RegisterUser';
import ReactDOM from 'react-dom';


interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  const inputStyle = "h-7 w-full mt-1 mb-2 outline-none border border-b-2 border-b-slate-300 rounded-md py-4 px-2 bg-transparent"

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChangeLogin = (e: any) => {
    e.preventDefault()
    setLogin(e.target.value)
  }
  const handleChangePassword = (e: any) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handlerClickConnect = (e: any) => {
    e.preventDefault()
    axios.post('http://localhost:8000/auth/signin', {
      login,
      password,
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZXhwIjoxNjY5Nzk3ODA3fQ.rjwI1Y4CRITKYAlz4496QqPvrt35nsVYx_gwDPnTVZA'
    }
    })
      .then(data => {
        console.log("API Data:", data)
        window.location.href += "loggedIn"
      })
      .catch(e => {
        console.log("API Error:", e)
      })
  }
  const handlerRegisterUser = () => {
    ReactDOM.render(<RegisterUser />, document.querySelector('body'))
  }


  return (
    <div className='flex items-center justify-center w-full h-screen text-black  text-sm font-light bg-blue-50'>
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
            htmlFor="login">Usuário:</label><br></br>
          <input
            type="email"
            name="login"
            id="login"
            onChange={handleChangeLogin}
            value={login}
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
          <button className='font-semibold text-sky-700 hover:text-sky-500 focus:text-sky-800'
            onClick={handlerRegisterUser}>
            Registre-se
          </button>
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
  )
}

export default HomeLayout