import CursoCard from "@/components/layouts/CursoCard";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { CursoCardProps } from "@/components/layouts/CursoCard"

import axios from 'axios'
import { useEffect, useState } from "react";

export default function LaggedPage() {

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
        <div className="bg-blue-600 h-screen py-4 transition-all">
            <HeaderLayout username="teste" email="teste@gmail.com"/>
<           main className="h-screen overflow-x-scroll w-full mt-24 bg-white px-4">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-black font-medium text-base sm:text-2xl pt-16 pb-8 mt-10 sm:pt-16 md:pt-16 lg:pt-24">
                        Recentemente adicionados:
                    </h2>
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
