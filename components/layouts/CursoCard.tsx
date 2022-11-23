// titulo(key), descricao, 
interface CursoCardProps{
    title: string;
    description: string;
}
export default function CursoCard(props: CursoCardProps) {
    return (
        <div className="w-64 rounded-md shadow-xl bg-gray-100 border-x top-48 mb-8">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}
                </div>
                <p className="text-gray-700 text-base pb-4
                ">{props.description}</p>
            
                <button className="flex items-center justify-center px-6 py-2 w-full text-white font-medium bg-blue-600 rounded-md focus:bg-blue-700"><a href="/courses/[id]" target="_blank" rel="noopener noreferrer">Ver Mais!</a></button>
            </div>
        </div>
    )
}