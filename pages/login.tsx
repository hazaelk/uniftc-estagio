import { useForm } from "react-hook-form";
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

type FormData = {
  login: string;
  password: string;
};


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    signIn('plabos', {
      login: data.login,
      password: data.password
    })
  });

  return (
    <main className="flex w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
        <img src='/ftc_logo_v.png' alt='Logo FTC' className="mb-8" />
        <form onSubmit={onSubmit} className='flex flex-col w-full px-16 md:px-32 lg:px-0 lg:w-3/4 xl:w-2/4' >
          <label className='mt-4 mb-1 text-lg text-gray-600'>Login</label>
          <input {...register("login", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md border-opacity-70'/>
          <label className='mt-4 mb-1 text-lg text-gray-600'>Senha</label>
          <input type='password' {...register("password", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md'/>
          <button className="w-full px-6 py-3 my-6 text-white bg-blue-600 rounded-md" >
            Conectar
          </button>
        </form>
      </div>
      <div className="items-center justify-center hidden w-full bg-blue-600 lg:flex md:w-1/2" style={{backgroundImage: `url(/login_banner.png)`, backgroundPosition: 'center', backgroundSize: 'cover'}} />
    </main>
  );
}

export default Login;
