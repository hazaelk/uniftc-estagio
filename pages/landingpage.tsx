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

const imgLandingStyle = "w-1/4 h-1/5 absolute top-56 sm:top-4 sm:w-1/5 sm:h-36 sm:absolute md:top-4 md:max-w-1/4 md:min-h-40 md:absolute lg:top-0 lg:w-1/5 lg:h-52 lg:absolute"
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
            <main className="h-screen overflow-x-scroll w-full mt-24 bg-white">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-black font-medium text-2xl pt-16 pb-8 mt-10 sm:pt-16 md:pt-16 lg:pt-24">Recentemente adicionados:</h2>
                    <div className="xs:grid xs:grid-cols-2 xs:gap-8 sm:grid sm:grid-cols-3 sm:gap-10 md:grid md:grid-cols-4 md:gap-14">
                     
                        {listaCursos.map((item) => {
                            return <CursoCard key={item.title} title={item.title} description={item.description}/>
                        })}
                    </div>

                </div>

            </main>
            
        </div>
    )
    
}
