import Image from "next/image";
import { CursoCardProps } from "@/components/layouts/CursoCard"
import ImgCourse from '../../public/images_meus_cursos/img-courses-list.png'
export interface CursoCardProgressProps extends CursoCardProps {
    course_load: number;
}

export default function CursoCardProgress(props: CursoCardProgressProps) {
    return (
        <div className="max-w-xs h-full px-2 py-2 rounded-lg shadow-xl bg-gray-100 border-x top-48 mb-8 flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center">
                <Image width={208} height={160} alt={props.description} src={ImgCourse} />
                <div className="font-bold text-sm sm:text-base md:text-lg my-1 w-full">{props.title}<hr />
                </div>
            </div>
            <p className="text-gray-700 text-xs sm:text-base md:text-lg pb-4 w-full h-1/2
                ">{props.description}</p>
                <div className="w-full bg-gray-300 rounded-full">
                    <div className="text-sm sm:text-base md:text-lg font-medium  text-white text-center leading-none rounded-full" style={{ width: `${props.course_load}%`, backgroundColor: `${props.course_load === 100 ? '#090':'#0284C7'}`}}>{props.course_load}%</div>
                </div>
        </div>
    )
}