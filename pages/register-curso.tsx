import { useForm } from "react-hook-form";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import Layout from "@/components/layouts/Default";

export type FormData = {
    title: string;
    course_load: number;
    author_id: number;
    description: string;
};


function CreateCourse() {
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const session = useSession()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (e: FormEvent) => { e.preventDefault() }

    const onRegister = handleSubmit(data => {
        setError(null)
        if (session.status === 'unauthenticated') {
            setError('Sessão desconectada.')
            return
        }

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"title":"${data.title}","course_load":"${data.course_load}","author_id":"${data.author_id}","description":"${data.description}"}`
        })
            .then(response => {
                if (response.ok) {
                    router.push(`/course-config/id/${1}`)
                    return response.json()
                } else {
                    throw new Error("Erro ao registrar curso.")
                }
            })
            .then(response => {
                router.push('/meus-cursos')
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    })


    if (session.status === 'loading') {
        return <div className="flex items-center justify-center w-full h-screen">Carregando...</div>
    }

    if (session.status === 'unauthenticated') {
        setError('Autenticação necessária.')
        router.push('/')
        return <> </>
    }

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center w-1/2 h-full mx-auto">
            <img src='/ftc_logo_v.png' alt='Logo FTC' className="mb-8" />
                <form onSubmit={onSubmit} className='flex flex-col px-16 md:px-32 lg:px-0 lg:w-3/4 xl:w-2/4' >
                    <label className='mt-4 mb-1 text-lg text-gray-600'>Titulo</label>
                    <input {...register("title", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md border-opacity-70' />
                    <label className='mt-4 mb-1 text-lg text-gray-600'>Descrição</label>
                    <input type="text" placeholder="Sintetize a descrição do curso." {...register("description", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md border-opacity-70' />
                    <label className='mt-4 mb-1 text-lg text-gray-600'>Autor id</label>
                    <input type='number' min="1" {...register("author_id", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md' />
                    <label className='mt-4 mb-1 text-lg text-gray-600'>Carga horária do Curso</label>
                    <input type='number' min="1" placeholder="Insira a quantidade de minutos." {...register("course_load", { required: true })} className='px-4 py-2 border border-gray-300 rounded-md' />
                    
                    {error && <p className='mt-4 text-red-500'>{error}</p>}
                    <p className="flex flex-row w-full">
                        <button className="w-full px-6 py-3 my-6 ml-auto text-white duration-300 bg-blue-600 rounded-md hover:bg-blue-400 " onClick={onRegister}>
                            Registrar Curso
                        </button>
                    </p>
                </form>

            </div>
        </Layout>

    );
}

export default CreateCourse;
