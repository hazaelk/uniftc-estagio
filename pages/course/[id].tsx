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
         {/*  <div className="mb-4 flex text-[10px] items-center gap-2">
            <p className="px-2 py-1 bg-blue-100 border border-blue-200 rounded">
            </p>
            <p className="px-2 py-1 bg-blue-100 border border-blue-200 rounded">
              Inteligencia Artificial
            </p>
          </div> */}
          {/* <div className="flex justify-between text-xs text-[#828282] mb-2">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 mr-2 text-[#D3D2D2]"
              >
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>1 de Janeiro, 2023</p>
            </span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 mr-2 text-[#D3D2D2]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              <p>[Author]</p>
            </span>
          </div> */}
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
