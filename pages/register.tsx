import { useForm } from "react-hook-form";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

type FormData = {
  name: string;
  login: string;
  password: string;
  password_confirm: string;
};


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

  const onRegister = handleSubmit( data => {
    setError(null)
    if (data.password !== data.password_confirm) {
      setError('Senha e confirmação diferem.')
      return
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: `{"login":"${data.login}","name":"${data.name}","password":"${data.password}","password_confirm":"${data.password_confirm}"}`
    })
    .then( response => {
      if (response.ok){
        return response.json()
      } else {
        throw new Error("Erro ao registrar usuário.")
      }
    })
    .then( response => {
      router.push('/login')
    })
    .catch( err => {
      setError( 'Usuário em uso.' )
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
        <label className='mt-4 mb-1 text-lg text-gray-600'>Nome</label>
          <input {...register("name", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md border-opacity-70'/>
          <label className='mt-4 mb-1 text-lg text-gray-600'>Usuário</label>
          <input {...register("login", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md border-opacity-70'/>
          <label className='mt-4 mb-1 text-lg text-gray-600'>Senha</label>
          <input type='password' {...register("password", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md'/>
          <label className='mt-4 mb-1 text-lg text-gray-600'>Confirme sua senha</label>
          <input type='password' {...register("password_confirm", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md'/>
          {error && <p className='mt-4 text-red-500'>{error}</p>}
          <p className="flex flex-row w-full">
            <button className="w-full px-6 py-3 my-6 ml-auto text-white duration-300 bg-blue-600 rounded-md hover:bg-blue-400 " onClick={onRegister}>
              Registrar
            </button>
          </p>
        </form>
      </div>
      <div className="items-center justify-center hidden w-full bg-blue-600 lg:flex md:w-1/2" style={{backgroundImage: `url(/login_banner.png)`, backgroundPosition: 'center', backgroundSize: 'cover'}} />
    </main>
  );
}

export default Login;
