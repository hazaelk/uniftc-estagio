import CourseCardMy from "@/components/CourseCardMy";
import Layout from "@components/layouts/Default";
import { useSession } from "next-auth/react";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link'

type Props = {};

function Cursos({}: Props) {
  const session = useSession() as any
  const [courses, setCourses] = useState<any[]>([]);
  const router = useRouter()
  console.log(session.data)
  useEffect(()=>{
    if (!session || !session.data) { return };
    
    async function fetchCourses() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/learning/${session.data?.user.id}`);
        const data = await response.json();
        setCourses(data);
      } catch(e) {
        console.error(e)
      }
    }
    fetchCourses();
  }, [session])

  
  if (session.status === 'loading') {
    return <div className="flex items-center justify-center w-full h-screen">Carregando...</div>
  }
  
  if (session.status === 'unauthenticated') {
    router.push('/')
    return <> </>
  }
  
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center px-6 pt-6 pb-10 text-white bg-blue-600">
        <h1 className="text-4xl font-medium text-center">Meus Cursos</h1>
      </section>
      <section className="px-6 pb-10 mt-10 md:px-14 lg:px-24">
        <h2 className="mb-6 text-xl font-semibold md:text-2xl">Meus cursos</h2>
        {/* <div className="flex gap-2 mb-4">
          <button className="flex items-center text-[#4F4F4F] justify-center rounded-md px-4 py-1 text-sm border border-[#D3D2D2]">
            Categoria
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2 -mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className="flex items-center text-[#4F4F4F] justify-center rounded-md px-4 py-1 text-sm border border-[#D3D2D2]">
            Ordem
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2 -mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            
          </button>
        </div> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          { courses && Array.isArray(courses) && courses.map((course) => {
            return <Link href={`/course/${course.id}`} key={course.id}><CourseCardMy image={course.image_url} title={course.title} description={course.description} /></Link>
          })}
        </div>
      </section>
    </Layout>
  );
}

export default Cursos;
