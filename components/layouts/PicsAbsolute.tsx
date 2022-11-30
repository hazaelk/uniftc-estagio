import Image from "next/image";
import foto1 from '../../public/cards_publicidade/foto1.png'
import foto2 from '../../public/cards_publicidade/foto2.png'
import foto3 from '../../public/cards_publicidade/foto3.png'


export default function PicsAbsolute() {
    const imgLandingStyle = `absolute w-1/4 h-1/8 top-52 transition-all rounded-md 
    xs:top-44 
    sm:-mx-10 sm:top-0 
    md:-top-1 md:w-1/4 md:h-48 
    lg:top-0 lg:w-48 lg:h-48 lg:-mx-0
    xl:w-56 xl:h-56 xl:-mx-0 `
    return (
        <div className="flex justify-evenly sm:relative sm:z-1 sm:left-auto sm:right-auto">
            <Image src={foto1} 
            className={imgLandingStyle + "md:left-28 sm:left-24 xs:left-8 left-6"}
            alt={"Imagem de exemplo"}
            />
            <Image src={foto2}
            className={imgLandingStyle + "origin-center"}
            alt={"Imagem de exemplo"}
            />
            <Image src={foto3}
            className={imgLandingStyle + "md:right-28 sm:right-24 xs:right-8 right-6"}
            alt={"Imagem de exemplo"}
            />
        </div>
    )
}