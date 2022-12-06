import { useEffect, useState } from 'react'
import CourseCard from "@/components/CourseCard";
import CourseCardAvailable from "@/components/CourseCardAvailable";
import CourseCardMy from "@/components/CourseCardMy";
import Layout from "@components/layouts/Default";

type Props = {};

function Cursos({}: Props) {
  const [courses, setCourses] = useState<any[]>([]);
  
  useEffect(()=>{
    async function fetchCourses() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course`);
      const data = await response.json();
      setCourses(data);
    }
    fetchCourses();
  }, [])

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center px-6 pt-6 pb-10 text-white bg-blue-600">
        <h1 className="text-4xl font-medium text-center">Cursos disponíveis</h1>
      </section>
      <section className="px-6 mt-10 md:px-14 lg:px-24 ">
        <h2 className="mb-6 text-xl font-semibold md:text-2xl">
        Populares
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <CourseCardAvailable
              id={course.id}
              title={course.title}
              author={course.author}
              description={course.description}
              key={course.id} 
            />
          )).splice(0, 3)}
        </div>
      </section>
      <section className="px-6 pb-10 mt-10 md:px-14 lg:px-24">
        <h2 className="mb-6 text-xl font-semibold md:text-2xl">
        Todos os cursos
        </h2>
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
        {courses.map(course => (
            <CourseCardAvailable
              id={course.id}
              title={course.title}
              author={course.author}
              description={course.description}
              key={course.id} 
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Cursos;
