import FilterListItem from "@/components/FilterListItem";
import CursoCardProgress from "@/components/layouts/CursoCardProgress";
import { CursoCardProgressProps } from "@/components/layouts/CursoCardProgress";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import HeaderTitles from "@/components/layouts/HeaderTitles";

import { useEffect, useState } from "react";
import axios from 'axios'


export default function CursosUser() {

    const [dropdown, setDropDown] = useState<boolean>(false)
    const ToggleDropdown = () => setDropDown(dropdown => !dropdown)
    let dropDownShow = dropdown ? 'absolute' : 'hidden'

    const [dropdown1, setDropDown1] = useState<boolean>(false)
    const ToggleDropdown1 = () => setDropDown1(dropdown1 => !dropdown1)
    let dropDownShow1 = dropdown1 ? 'absolute' : 'hidden'

    const [cursos, setCursos] = useState<CursoCardProgressProps[]>([])
    async function handleCursos() {
        await axios.get('http://localhost:8000/course', {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZXhwIjoxNjY5Nzk3ODA3fQ.rjwI1Y4CRITKYAlz4496QqPvrt35nsVYx_gwDPnTVZA'
            }
        }).then((resp) => setCursos(resp.data))
    }

    useEffect(() => { handleCursos() }, [])
    return (
        <div className="bg-blue-600 h-screen py-4 transition-all">
            <HeaderLayout username="teste" email="teste" />
            <HeaderTitles title="Meus Cursos" />
            <main className="bg-white px-4 py-4">
                <div className="flex flex-col">
                    <div className="font-semibold text-2xl">
                        Filtros
                    </div>
                    <div className="flex">
                        <div className="flex justify-center">
                            <div className="flex">
                                <div onClick={ToggleDropdown} className="pr-2" >
                                    <a className="px-4 py-2 bg-gray-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                                        href="#" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Titulo
                                        <svg aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="caret-down"
                                            className="w-2 ml-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <ul className={`min-w-max ${dropDownShow} bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`} aria-labelledby="dropdownMenuButton2">
                                        <FilterListItem title="Banco de Dados" />
                                        <FilterListItem title="Programação" />
                                        <FilterListItem title="Infraestrutura" />
                                        <FilterListItem title="Redes" />

                                    </ul>
                                </div>
                                <div onClick={ToggleDropdown1} >
                                    <a className="px-4 py-2 bg-gray-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap mb-4"
                                        href="#" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Estágios
                                        <svg aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="caret-down"
                                            className="w-2 ml-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <ul className={`min-w-max ${dropDownShow1} bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`} aria-labelledby="dropdownMenuButton2">
                                        <FilterListItem title="Não iniciado(s)" />
                                        <FilterListItem title="Em andamento(s)" />
                                        <FilterListItem title="Concluído(s)" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3  md:grid md:grid-cols-4 gap-4 box-border">
                    {cursos.map((item) => {
                        return <CursoCardProgress key={item.title} title={item.title} description={item.description} course_load={item.course_load} />
                    })}
                </div>
            </main>
        </div>
    )
}