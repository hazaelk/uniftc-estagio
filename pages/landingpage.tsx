import CursoCard from "@/components/layouts/CursoCard";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import HeaderTitles from "@/components/layouts/HeaderTitles";
import Image from "next/image";
import foto1 from '../public/cards_publicidade/foto1.png'
import foto2 from '../public/cards_publicidade/foto2.png'
import foto3 from '../public/cards_publicidade/foto3.png'
import { CursoCardProps } from "@/components/layouts/CursoCard"

import axios from 'axios'
import { useEffect, useState } from "react";

export default function LandingPage() {

const imgLandingStyle = "w-1/4 h-1/4 top-76 xs:w-1/4 xs:h-1/3 absolute xs:top-54 sm:top-4 sm:w-1/5 sm:h-36 sm:absolute md:top-4 md:max-w-1/4 md:min-h-40 md:absolute lg:top-0 lg:w-1/5 lg:h-52 lg:absolute transition-all"

const [cursos, setCursos] = useState<CursoCardProps[]>([])
async function handleCursos() {
    await axios.get('http://localhost:8000/course', {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZXhwIjoxNjY5Nzk3ODA3fQ.rjwI1Y4CRITKYAlz4496QqPvrt35nsVYx_gwDPnTVZA'
        }
    }).then((resp) => setCursos(resp.data))
}

    useEffect(() => {handleCursos()}, [])

    return (
        <div className="bg-blue-600 h-1/2 py-4 transition-all">
            <HeaderLayout 
            username="" 
            email=""/>

            <HeaderTitles 
            title="Lorem ipsum" 
            subtitle="Dolor sit amet, it ame lorem lor." />

            <div className="flex justify-evenly sm:relative sm:z-1 sm:left-auto sm:right-auto">
                <Image src={foto1} 
                className={imgLandingStyle + "sm:left-24 left-10 md:left-28"}
                alt={"Imagem de exemplo"}
                />
                <Image src={foto2}
                className={imgLandingStyle + "origin-center"}
                alt={"Imagem de exemplo"}
                />
                <Image src={foto3}
                className={imgLandingStyle + "sm:right-24 right-10 md:right-28"}
                alt={"Imagem de exemplo"}
                />
            </div>
            <main className="h-screen overflow-x-scroll w-full mt-24 bg-white px-4">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-black font-medium text-base sm:text-2xl pt-16 pb-8 mt-10 sm:pt-16 md:pt-16 lg:pt-24">Recentemente adicionados:</h2>
                    <div className="xs:grid xs:grid-cols-2 xs:gap-8 sm:grid sm:grid-cols-3 sm:gap-10 md:grid md:grid-cols-4 md:gap-14 w-full">
                     
                        {cursos?.map((item: CursoCardProps) => {
                            return <CursoCard key={item.title} title={item.title} description={item.description}/>
                        })}
                    </div>

                </div>

            </main>
            
        </div>
    )
    
}
