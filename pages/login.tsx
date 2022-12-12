import { useForm } from "react-hook-form";
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import Link from "next/link";

type FormData = {
  login: string;
  password: string;
};

const responsesi18n: {[key:string]: string} = {
  'CredentialsSignin': 'Login ou senha incorretos',
  'Incorrect username or password': 'Usuário ou senha incorretos',
  'ensure this value has at least 8 characters': 'A senha deve ter pelo menos 8 caracteres',
}

function Login() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const session = useSession()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  
  const onSubmit = (e:FormEvent) => { e.preventDefault() }
  const onLogin = handleSubmit( data => {
    signIn('plabos', {
      redirect: false,
      login: data.login,
      password: data.password
    })
    .then( (response) =>{
      if (response?.error) {
        setError(response.error)
      } else {
        setError(null)
        router.push('/')
      }
    })
  })

  if (session.status === 'loading') {
    return <div className="flex items-center justify-center w-full h-screen">Carregando...</div>
  }
  
  if (session.status === 'authenticated') {
    router.push('/')
    return <> </>
  }

  return (
    <main className="flex w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
        <img src='/ftc_logo_v.png' alt='Logo FTC' className="mb-8" />
        <form onSubmit={onSubmit} className='flex flex-col w-full px-16 md:px-32 lg:px-0 lg:w-3/4 xl:w-2/4' >
          <label className='mt-4 mb-1 text-lg text-gray-600'>Login</label>
          <input {...register("login", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md border-opacity-70'/>
          <label className='mt-4 mb-1 text-lg text-gray-600'>Senha</label>
          <input type='password' {...register("password", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md'/>
          {error && <p className='mt-4 text-red-500'>{ responsesi18n[error] ? responsesi18n[error] : error }</p>}
          <p className="flex flex-row w-full">
            <Link href='/register'>
              <button className="px-6 py-3 my-6 mr-2 text-black duration-300 rounded-md w-min hover:bg-blue-600 hover:text-white" > Registrar </button>
            </Link>
            <button className="w-full px-6 py-3 my-6 ml-2 text-white duration-300 bg-blue-600 rounded-md hover:bg-blue-400" onClick={onLogin}>
              Conectar
            </button>
          </p>
        </form>
      </div>
      <div className="items-center justify-center hidden w-full bg-blue-600 lg:flex md:w-1/2" style={{backgroundImage: `url(/login_banner.png)`, backgroundPosition: 'center', backgroundSize: 'cover'}} />
    </main>
  );
}

export default Login;
