import CursoCard from "@/components/layouts/CursoCard"
import HeaderLayout from "@/components/layouts/HeaderLayout"
import Image from "next/image"

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
            username="willian"/>
            <section className="flex flex-col items-center mt-16">
                <h1 className="text-white font-bold text-4xl">Lorem ipsum</h1>
                <h5 className="text-gray-300 mt-1 mb-10 text-sm">Dolor sit amet, it ame lorem lor.</h5>
            </section>
            <div className="flex justify-evenly sm:relative sm:z-1 sm:left-auto sm:right-auto">
                <Image 
                    src={'/cards_publicidade/foto1.png'} 
                    className="w-1/4  m-1 sm:w-52 sm:h-56 sm:absolute sm:left-40"
                    alt={""}
                />
                <Image 
                    src={'/cards_publicidade/foto2.png'}
                    className="w-1/4  m-1 sm:w-52 sm:h-56 sm:absolute sm:origin-center"
                    alt={""}
                />
                <Image 
                    src={'/cards_publicidade/foto3.png'}
                    className="w-1/4 m-1 sm:w-52 sm:h-56 sm:absolute sm:right-40"
                    alt={""}
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
