import Image from "next/image";
import { useState } from "react";
import UserIcon from '../../public/usericon.png';
interface clientProps {
    username?: string;
    email?: string;
}
export default function HeaderLayout(props: clientProps) {

    const [dropdown, setDropDown] = useState<boolean>(false)

    function ToggleDropdown() {
        setDropDown(dropdown => !dropdown)
    }

    let dropDownShow = dropdown ? 'absolute' : 'hidden'
    function BotaoEntrar() {
        return (
            <div>
                <button className="bg-gray-400 text-black h-6 w-full font-semibold text-sm rounded-sm text-center mb-2">
                    <a href="/loggedIn">Entre</a>
                </button>
                
            </div>
        )
    }
    return (
        <div className="flex justify-between bg-transparent text-white font-normal transition px-4 relative">
            <a href="/">Icone</a>
            <ul className="flex font-medium ml-16">
                <li className="mx-4 px-2 py-1 rounded-lg hover:text-sky-600 hover:bg-white"><a href="/HomeLayout">Início</a></li>
                <li className="mx-4 px-2 py-1 rounded-lg hover:text-sky-600 hover:bg-white"><a href="/cursos">Cursos</a></li>
                <li className="mx-4 px-2 py-1 rounded-lg hover:text-sky-600 hover:bg-white"><a href="/about">Sobre</a></li>
            </ul>

            <button id="dropdownAvatarNameButton" onClick={ToggleDropdown} data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-medium text-gray-900 rounded-xl hover:text-blue-600 dark:hover:text-blue-200 md:mr-0 focus:bg-sky-800 focus:text-black focus:hover:text-blue-800 dark:focus:bg-sky-300  dark:text-white p-1" type="button">
                
                <Image className={`mr-2 w-8 h-8 rounded-full ${props.username ? 'relative' : 'hidden'}`} src={UserIcon} alt="user photo" />
                {props.username ? props.username.charAt(0).toUpperCase()+props.username.toString().slice(1) : 'User'}
                <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div id="dropdownAvatarName" className={`${dropDownShow} z-10 w-44 top-12 right-4 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
                <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">{props.username ? props.username.toUpperCase() : BotaoEntrar()}</div>
                    <div className="flex flex-wrap">{props.email ? props.email : 'Seu futuro depende de você.'}</div>
                </div>
                <ul className={`${props.username ? 'block' : 'hidden'} py-1 text-sm text-gray-700 dark:text-gray-200`}>
                    <li>
                        <a href="/cursos" className={`py-2 px-4 text-blue-300 text-base block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>Meus cursos</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Desconectar</a>
                </div>
            </div>

        </div>
    )
}