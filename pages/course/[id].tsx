import { useEffect, useState } from 'react'
import CourseCard from "@/components/CourseCard";
import CourseCardAvailable from "@/components/CourseCardAvailable";
import CourseCardMy from "@/components/CourseCardMy";
import Layout from "@components/layouts/Default";
import Link from "next/link";
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next';

type Props = {
  course: {
    title: string;
    description: string;
    image_url: string;
    id: number;
    categories: {
      name: string;
      id: number;
    }[];
    user: {
      name: string
    }
  },
  lessons: {
		name: string,
		video_uuid: string,
		course_id: number,
		id: number
	}[]
};

function Cursos({course, lessons}: Props) {
  const router = useRouter()

  return (
    <Layout>
      <div className="flex md:flex-row flex-col bg-white shadow-md p-4 gap-8 text-[#121212] w-full">
        <div>
          <img
            alt=""
            className="object-cover w-full h-64 rounded-md aspect-video"
            src={course.image_url || "https://source.unsplash.com/random/?Technology"}
          />
        </div>
        <div className='relative flex flex-col w-full'>
          { course.categories.length > 0 && <div className="mb-4 flex text-[10px] items-center gap-2">
            {course.categories.map((category) => {
              return <p className="px-2 py-1 bg-blue-100 border border-blue-200 rounded" key={`cat.${category.id}`}>
                {category.name}
              </p>
            })}
          </div> }
          <p className="mb-2 text-lg font-semibold">{course.title}</p>
          <p className="h-full mb-4 text-sm">
            {course.description}
          </p>
          <button className="bg-[#1294F2] text-white rounded-md w-full py-2" onClick={()=>{router.push('/meus-cursos')}}>
            Matricular
          </button>
        </div>
      </div>
      <h2 className="p-4 text-xl font-medium bg-gray-100">Aulas:</h2>
      {lessons.map((lesson) => {
        return <Link href={`/watch/${course.id}/${lesson.id}`} key={lesson.id}>
          <div className="flex md:flex-row flex-col bg-white shadow-md p-4 gap-8 text-[#121212] hover:bg-gray-400 duration-300 my-2 mx-2 rounded-md">
            <div className="w-4/5">
              <p className="font-semibold">
                {lesson.name}
              </p>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p> */}
            </div>
          </div>
        </Link>
      })}
     
    </Layout>
  );
}

export default Cursos;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context || !context.params || !context.params.id) { return { props: {} }}
  
  let courseData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/id/${context.params.id}`)
  courseData = await courseData.json()

  let classData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lesson/course/${context.params.id}`)
  classData = await classData.json()

  console.log(classData)
  return {
    props: {
      course: courseData,
      lessons: classData
    },
  }
}