import CursoCard from "@/components/layouts/CursoCard";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import Image from "next/image";
import styles from '../styles/Landing.module.css'
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
            username="willian"/>
            <section className="flex flex-col items-center mt-16">
                <h1 className="text-white font-bold text-4xl">Lorem ipsum</h1>
                <h5 className="text-gray-300 mt-1 mb-10 text-sm">Dolor sit amet, it ame lorem lor.</h5>
            </section>
            <div className="block mx-auto absolute ml-16 w-full sm:flex sm:items-center sm:justify-center">
                <Image src={foto1} className={styles.imgProps}
                alt={"Imagem de exemplo"}
                />
                <Image src={foto2}
                className={styles.imgProps}
                alt={"Imagem de exemplo"}
                />
                <Image src={foto3}
                className={styles.imgProps}
                alt={"Imagem de exemplo"}
                />
            </div>
            <main className="h-full w-full absolute z-0 mt-32 bg-white">
                <h2 className="text-black font-medium text-2xl mx-12 absolute top-40 mb-4">Recentemente adicionados:</h2>
                {listaCursos.map((item) => {
                    return <CursoCard key={item.title} title={item.title} description={item.description}/>
                })}
            </main>
            
        </div>
    )
    
}
