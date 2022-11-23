import Image from "next/image";
import UserIcon from '../../public/usericon.png';
import styles from '../../styles/Header.module.css'

interface clientProps {
    username: string;
}
export default function HeaderLayout(props: clientProps) {
    return (
        <div className="flex justify-between bg-transparent text-white font-normal transition px-4">
            <a href="/">Icone</a>
            <ul className="flex font-medium ml-16">
                <li className={styles.linksNav}><a href="/HomeLayout">Início</a></li>
                <li className={styles.linksNav}><a href="/courses">Cursos</a></li>
                <li className={styles.linksNav}><a href="/about">Sobre</a></li>
            </ul>
            <a href="userpage" className="flex items-center justify-center text-md">
                <span className="mr-2 font-thin underline underline-offset-2 hover:text-black capitalize">{props.username}</span>
                <Image src={UserIcon} alt="Foto do usuário" width={24} height={24} />
            </a>
        </div>
    )
}