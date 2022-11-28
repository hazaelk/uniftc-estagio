import Image, { StaticImageData } from "next/image";

// titulo(key), descricao, 
interface CursoCardProgressProps {
    title: string;
    description: string;
    progress: number;
    imgcourse: string | StaticImageData;
}
export default function CursoCardProgress(props: CursoCardProgressProps) {
    return (
        <div className="max-w-xs h-full px-2 py-2 rounded-lg shadow-xl bg-gray-100 border-x top-48 mb-8 flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center">
                <Image width={208} height={160} alt={props.description} src={props.imgcourse} />
                <div className="font-bold text-xl my-1 w-full">{props.title}<hr />
                </div>
            </div>
            <p className="text-gray-700 text-base pb-4 w-full h-1/2
                ">{props.description}</p>
                <div className="w-full bg-gray-200 rounded-full">
                    <div className="bg-sky-600 text-xs font-medium m-2 text-white text-center p-0.5 leading-none rounded-l-full" style={{ width: `${props.progress}%`}}> {props.progress}%</div>
                </div>
        </div>
    )
}