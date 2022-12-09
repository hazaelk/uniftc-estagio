import { useEffect, useState } from 'react'
import CourseCard from "@/components/CourseCard";
import CourseCardAvailable from "@/components/CourseCardAvailable";
import CourseCardMy from "@/components/CourseCardMy";
import Layout from "@components/layouts/Default";
import Link from "next/link";
import { useRouter } from 'next/router';

type Props = {};

function Cursos({}: Props) {
  const router = useRouter()
  const { id } = router.query
  const [course, setCourse] = useState({ title: 'título', id: 0, description: 'descrição', author_id: 'autor' });
  
  useEffect(()=>{
    async function fetchCourses() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/id/${id}`);
      const data = await response.json();
      setCourse(data);
    }
    fetchCourses();
  }, [id])



  return (
    <Layout>
      <div className="flex md:flex-row flex-col bg-white shadow-md p-4 gap-8 text-[#121212] w-full">
        <div>
          <img
            alt=""
            className="object-cover w-full h-full rounded-md aspect-video"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          />
        </div>
        <div>
          <p className="mb-2 text-lg font-semibold">{course.title}</p>
          <p className="mb-4 text-sm">
            {course.description}
          </p>
          <button className="bg-[#1294F2] text-white rounded-md w-full py-2" onClick={()=>{router.push('/meus-cursos')}}>
            Matricular
          </button>
        </div>
      </div>
      <h2 className="p-4 text-xl font-medium bg-white">Lista de aulas</h2>
      <Link href={"/aula"}>
        <div className="flex md:flex-row flex-col bg-white shadow-md p-4 gap-8 text-[#121212]">
          <div className="w-1/5">
            <img
              alt=""
              className="object-cover h-full rounded-md aspect-video"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
          </div>
          <div className="w-4/5">
            <p className="font-semibold">
              01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </Link>
    </Layout>
  );
}

export default Cursos;
