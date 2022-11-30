// titulo(key), descricao, 
export interface CursoCardProps{
    title: string;
    description: string;
}
export default function CursoCard(props: CursoCardProps) {
    return (
        <div className="transition-all
        box-border border-sky-200 border-y-4 p-2 rounded-md shadow-md w-full h-full
        shadow-sky-100 m-2 hover:bg-slate-50
        flex flex-col items-stretch justify-between">
           <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{props.title}</div>
           <hr />
           <div>{props.description}</div> 
           <div>
            <button className="w-full rounded-md bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-semibold py-1">Ver mais</button>
           </div>
        </div>
    )
}