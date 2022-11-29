import Image from "next/image";
import { useState } from "react";
import UserIcon from '../../public/usericon.png';
interface clientProps {
    username?: string;
    email?: string;
}
export default function HeaderLayout(props: clientProps) {

    const [dropdown, setDropDown] = useState<boolean>(false)
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    function ToggleDropdown() {
        setDropDown(dropdown => !dropdown)
    }

    let dropDownShow = dropdown ? 'absolute' : 'hidden'
    let menuhamburguer = window.screen.width > 475 ? true : false
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
        menuhamburguer ?
                <div className="flex justify-between bg-transparent text-white font-normal transition px-4 relative" >
                    <a href="/">Icone</a>
                    <ul className="flex font-medium ml-16">
                        <li className="mx-4 px-2 py-1 rounded-lg hover:text-sky-600 hover:bg-white">
                            <a href="/HomeLayout">Início</a>
                        </li>
                        <li className="mx-4 px-2 py-1 rounded-lg hover:text-sky-600 hover:bg-white">
                            <a href="/cursos">Cursos</a>
                        </li>
                        <li className="mx-4 px-2 py-1 rounded-lg hover:text-sky-600 hover:bg-white">
                            <a href="/about">Sobre</a>
                        </li>
                    </ul>
                    <button id="dropdownAvatarNameButton" onClick={ToggleDropdown} data-dropdown-toggle="dropdownAvatarName"
                        className="flex items-center text-sm font-medium text-white rounded-md p-1 transition-colors hover:bg-sky-400 hover:text-gray-700 md:mr-0 focus:bg-sky-500 focus:text-black focus:hover:bg-sky-600 focus:hover:text-white dark:focus:bg-sky-300"
                        type="button">

                        <Image className={`mr-2 w-8 h-8 rounded-md ${props.username ? 'relative' : 'hidden'}`} src={UserIcon} alt="foto do usuário" />
                        {props.username ? props.username.charAt(0).toUpperCase() + props.username.toString().slice(1) : 'User'}
                        <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div id="dropdownAvatarName" className={`${dropDownShow} z-10 w-44 top-8 right-4 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
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

            :
            <div className="flex items-center justify-between border-b border-gray-400 py-8">
                <a href="/">
                    <span>logo</span>
                </a>
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> // toggle class based on isNavOpen state
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/about">About</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/portfolio">Portfolio</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>
    )
}
