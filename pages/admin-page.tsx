import CourseCardAvailable from "@/components/CourseCardAvailable";
import Layout from "@components/layouts/Default";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

function AdminPage({ }: Props) {

    //Handle interactions user
    const [divFilter, setDivFilter] = useState<boolean>(false)
    function handleClick() {
        setDivFilter(!divFilter)
        setCurrentElementFilter('')
        console.log(divFilter)
    }

    const [currentElementFilter, setCurrentElementFilter] = useState<string>('')
    const selectChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setCurrentElementFilter(value)
        console.log(value)
    }

    const [idFilter, setIdFilter] = useState<number>()
    const selectChangeIdFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueId = Number(e.target.value)
        setIdFilter(valueId)
        console.log(valueId)
    }

    //session and connection to database to filter
    const session = useSession() as any
    const [courses, setCourses] = useState<any[]>([]);
    const router = useRouter()


    async function getFilterCourseByAuthorId() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/author/id/${idFilter}`);
        const data = await response.json();
        setCourses(data);
        console.log('author')
        console.log(data)
    }


    async function getFilterCourseByCourseId() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/id/${idFilter}`);
        const data = await response.json();
        setCourses(data);
        console.log('curso')
        console.log(data)
    }



    if (session.status === 'loading') {
        return <div className="flex items-center justify-center w-full h-screen">Carregando...</div>
    }

    if (session.status === 'unauthenticated') {
        router.push('/')
        return <> </>
    }
    return (
        <Layout>
            <section className="p-4 transition-all">
                <button onClick={handleClick}
                    className="bg-[#1294F2] text-white rounded-md w-full py-2 transition-all">
                    Editar cursos
                </button>
                <div style={{ display: `${divFilter ? 'block' : 'none'}` }} className={'transition-all'}>
                    <div className="mt-4 ml-1 mb-1 font-semibold border-b-4 border-b-sky-700 transition-all">
                        Escolha o filtro abaixo
                    </div>
                    <select
                        className="transition-all mb-1 bg-gray-50 border border-sky-500 text-gray-900 text-sm rounded-lg outline-sky-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required value={currentElementFilter}
                        onChange={selectChangeFilter}>
                        <option selected value="course_id">Id do curso</option>
                        <option value="author_id">Id do autor</option>
                    </select>
                    {currentElementFilter && (
                        <div className="flex items-center justify-center transition-all">
                            <label className="font-medium capitalize ml-1 border-b-4 border-b-sky-700 rounded-md">{currentElementFilter}: </label>
                            <input className="bg-gray-50 ml-2 w-1/2 transition-all border border-sky-500 text-gray-900 mb-1 text-sm rounded-lg outline-sky-500 focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                                type="number" min="1" placeholder="Digite o valor do id correspondente." onChange={selectChangeIdFilter}>

                            </input>
                            <button onClick={`${currentElementFilter}` === 'author_id' ? getFilterCourseByAuthorId : getFilterCourseByCourseId}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className="w-6 h-6 ml-1 hover:fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
                <div className={`${courses.length === 0 ? 'hidden' : 'block'} border-t-2 border-b-4 h-full border-sky-700`}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {/* {`${currentElementFilter}` === 'course_id' ? ((course: any) => {
                            <CourseCardAvailable id={course.id} title={course.title} author={course.author}
                            description={course.description} key={course.id} />

                        }
                        ) : (
                        <>
                        </>)} */}
                        {courses.map(course => (
                            <div className="flex flex-col">
                                <CourseCardAvailable id={course.id} title={course.title} author={course.author}
                                description={course.description} key={course.id} />
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default AdminPage;