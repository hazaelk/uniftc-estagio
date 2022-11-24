import Image from 'next/image'
import Imagetest from '../../assets_test/testing-img-home.png'
import Ftclogo from '../../assets_test/ftc-logo.svg'
import styles from '../styles/Home.module.css'

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return <div className='flex items-center justify-center w-full h-screen text-black text-sm font-light bg-blue-50'>
    {children}
    
    <div className="flex items-center flex-col justify-center w-full">

      <Image
        src={Ftclogo}
        quality={100}
        alt="Logo da FTC"
        className={styles.logoStyle}
      />

      <form
        className='w-48 relative'
        action=""
        method="post">
        <label
          className='mb-6 font-normal'
          htmlFor="username">Usuário:</label><br></br>
        <input
          type="email" name="username" id="username"
          className={styles.inputStyle} /><br></br>

        <label
          className='mb-6 font-normal'
          htmlFor="password">Senha:</label><br></br>
        <input
          type="password" name="password" id="password"
          className={styles.inputStyle} />

        <button
          className="bg-blue-600 text-white font-semibold w-full h-8 rounded-md mt-4 active:bg-blue-800"
          type="submit">
            <a href='/landingpage'>Conectar</a>
          </button>
      </form>

    </div>
    <div className="items-center w-full h-full hidden sm:flex">
      <Image
        className="w-full h-full"
        src={Imagetest}
        alt="Mulher sorrindo, olhando para trás, segurando uma mão."
        quality={100}
        objectFit="fill" />
    </div>
  </div>
}

export default HomeLayout