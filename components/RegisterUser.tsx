import axios from 'axios'
import { HtmlHTMLAttributes, useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import ReactDOM from 'react-dom';

export default function RegisterUser() {
    const [name, setName] = useState<string>('')
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password_confirm, setPasswordConfirm] = useState<string>('')

    const handleChangeName = (e: any) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const handleChangeLogin = (e: any) => {
        e.preventDefault()
        setLogin(e.target.value)
    }
    const handleChangePassword = (e: any) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    const handleChangePassConfirm = (e: any) => {
        e.preventDefault()
        setPasswordConfirm(e.target.value)
    }

    const handleSubmitClick = async (e: any) => {
        e.preventDefault()
        await axios.post('http://localhost:8000/auth/signup', {
            name,
            login,
            password,
            password_confirm
        })
            .then(data => {
                console.log("API Data:", data)
            })
            .catch(e => {
                console.log("API Error:", e)
                ReactDOM.render(e.message, document.getElementById('feedback'))
            })


    }
    const handleClickClose = () => {
        try {
            window.location.href = "http://localhost:3000/"
        } catch (e: any) {
            ReactDOM.render(e.message, document.querySelector('feedback'))
        }
    }

    const handleResetClick = () => {
        document.querySelectorAll('input')
            .forEach((e) => { e.value = '' })
        setLogin(''), setName(''), setPassword(''), setPasswordConfirm('')
    }

    const labelStyle = "rounded-md transition-all px-2 mb-1"
    const inputStyle = "transition-all border-sky-200 focus:border-b-2 focus:outline-none bg-slate-100 focus:bg-slate-200 p-1 rounded-lg"
    const boxLabelInput = "transition-all rounded-lg sm:flex sm:flex-row flex-col justify-between my-1 hover:border-l-4 border-sky-300 "

    return (
        <div className="w-screen h-screen bg-slate-100 flex flex-col justify-center items-center">
            <div className="shadow-lg rounded-lg  bg-white h-1/2 w-1/2 overflow-hidden">
                <div className="flex justify-between bg-sky-600 px-4 py-2">
                    <div>
                        <Link href="/lLinkndingpage" >
                            <Image src="https://aluno.uniftc.edu.br/assets/images/uniftc-branco.png"
                                style={{ minWidth: 60, minHeight: 20 }}
                                width={80} height={60} alt="Logo da FTC" />
                        </Link>
                    </div>
                    <div className="font-bold text-white hover:text-red-500">
                        <button onClick={handleClickClose}>X</button>
                    </div>
                </div>
                <div className="p-6 flex flex-col">

                    <div className={boxLabelInput}>
                        <label className={labelStyle}
                            htmlFor="nome">
                            Nome:
                        </label>
                        <input className={inputStyle}
                            id="name" name="name" type="text"
                            placeholder="Nome completo"
                            onChange={handleChangeName}
                            value={name} />
                    </div>

                    <div className={boxLabelInput}>
                        <label className={labelStyle}
                            htmlFor="login">
                            Login:
                        </label>
                        <input className={inputStyle}
                            id="login" name="login" type="text"
                            onChange={handleChangeLogin}
                            value={login} />
                    </div>


                    <div className={boxLabelInput}>
                        <label className={labelStyle}
                            htmlFor="password">
                            Senha:
                        </label>
                        <input className={inputStyle}
                            id="password" name="password" type="password"
                            onChange={handleChangePassword}
                            value={password} />
                    </div>


                    <div className={boxLabelInput} style={{ display: "flex", flexDirection: "column" }}>
                        <label className={labelStyle}
                            htmlFor="password_confirm">
                            Confirme sua senha:
                        </label>
                        <input className={inputStyle}
                            id="password_confirm" name="password_confirm" type="password"
                            onChange={handleChangePassConfirm}
                            value={password_confirm} />
                    </div>
                    <div id="feedback">
                        <p className="text-red-500 text-xs italic">
                            Por favor, preencha todos os campos.
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <button className='bg-green-600 text-white rounded-md px-4 py-1'
                            onClick={handleSubmitClick}
                        >
                            Enviar
                        </button>

                        <button className='bg-red-600 text-white rounded-md px-4 py-1'
                            onClick={handleResetClick}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}