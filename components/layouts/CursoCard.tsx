// titulo(key), descricao, 
interface CursoCardProps{
    title: string;
    description: string;
}
export default function CursoCard(props: CursoCardProps) {
    return (
        <div className="w-56 h-42 rounded-lg shadow-xl bg-gray-100 border-x top-48 mb-8 flex flex-col justify-between">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 w-full h-1/4">{props.title}<hr />
                </div>
                <p className="text-gray-700 text-base pb-4 w-full h-1/2
                ">{props.description}</p>
                    <button className="flex items-center justify-center px-6 py-4 w-full h-1/4 text-white font-medium bg-blue-600 rounded-md focus:bg-blue-700">
                        <a href="/courses/[id]" target="_blank" rel="noopener noreferrer">
                            Ver Mais!
                        </a>
                    </button>
            </div>
        </div>
    )
}