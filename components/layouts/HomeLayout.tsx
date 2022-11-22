import Image from 'next/image'
import Imagetest from '../../../assets_test/testing-img-home.png'
import Ftclogo from '../../../assets_test/ftc-logo.svg'
interface Props {
  children: React.ReactNode;
}

const logoStyle = {
  height: '32%',
  width: '32%',
  marginBottom: '4%'
}
const inputStyle = {
  height: '1.6rem',
  width: '100%',
  marginTop: '2%',
  marginBottom: '4%',
  outline: 'none',
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '15px 8px',
  backgroundColor: 'transparent',

}
const HomeLayout = ({ children }: Props) => {
  return <div className='flex items-center justify-center w-full h-screen text-black text-sm font-light bg-blue-50'>
    {children}
    <div className="flex items-center flex-col justify-center w-full">
      <Image
        src={Ftclogo}
        quality={100}
        alt="Logo da FTC"
        style={logoStyle}

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
          style={inputStyle} /><br></br>
        <label
          className='mb-6 font-normal'
          htmlFor="password">Senha:</label><br></br>
        <input
          type="password" name="password" id="password"
          style={inputStyle} />
        <button
          className="bg-blue-600 text-white font-semibold w-full h-8 rounded-md mt-4"
          type="submit">Conectar</button>
      </form>
    </div>
    <div className="items-center w-full h-full hidden sm:flex">
      <Image
        className="w-full h-full"
        src={Imagetest}
        alt="Prédio da Uniftc Itabuna"
        quality={100}
        objectFit="fill" />
    </div>
  </div>
}

export default HomeLayout