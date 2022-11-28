import CursoCard from "@/components/layouts/CursoCard";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import HeaderTitles from "@/components/layouts/HeaderTitles";
import Image from "next/image";
import foto1 from '../public/cards_publicidade/foto1.png'
import foto2 from '../public/cards_publicidade/foto2.png'
import foto3 from '../public/cards_publicidade/foto3.png'


export default function LandingPage() {
const listaCursos = [
    {title: 'Banco de Dados', description: 'Curso de BD completo'},
    {title: 'Programação', 
    description: 'Curso de programação completo'},
    {title: 'Infraestrutura', 
    description: 'Curso de Infraestrutura completo'},
    {title: 'Redes', 
    description: 'Curso de Redes completo'},
    {title: 'Manutenção de computadores', 
    description: 'Curso de Manutenção de computadores completo'},
    {title: 'Boas práticas de programação', 
    description: 'Curso de Boas práticas de programação completo'},
]

    return (
        <div className="bg-blue-600 h-screen py-4 transition-all">
            <HeaderLayout 
            username="" 
            email=""/>

            <HeaderTitles 
            title="Lorem ipsum" 
            subtitle="Dolor sit amet, it ame lorem lor." />

            <div className="flex justify-evenly sm:relative sm:z-1 sm:left-auto sm:right-auto">
                <Image src={foto1} 
                className="w-1/4  m-1 sm:w-52 sm:h-56 sm:absolute sm:left-40"
                alt={"Imagem de exemplo"}
                />
                <Image src={foto2}
                className="w-1/4  m-1 sm:w-52 sm:h-56 sm:absolute sm:origin-center"
                alt={"Imagem de exemplo"}
                />
                <Image src={foto3}
                className="w-1/4 m-1 sm:w-52 sm:h-56 sm:absolute sm:right-40"
                alt={"Imagem de exemplo"}
                />
            </div>
            <main className="h-full w-full mt-24 bg-white">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-black font-medium text-2xl py-4 sm:pt-36">Recentemente adicionados:</h2>
                    <div className="grid grid-cols-2 gap-5 sm:grid sm:grid-cols-3 sm:gap-8 sm:pt-4">
                        {listaCursos.map((item) => {
                            return <CursoCard key={item.title} title={item.title} description={item.description}/>
                        })}
                    </div>

                </div>

            </main>
            
        </div>
    )
    
}
