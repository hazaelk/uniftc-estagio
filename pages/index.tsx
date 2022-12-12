import { useState } from 'react'

import CourseCard from "@/components/CourseCard";
import Layout from "@components/layouts/Default";


type Props = {
  courses:   {
    "title": string,
    "course_load": number,
    "author_id": number,
    "description": string,
    "image_url": string,
    "id": number,
    "categories": {
        "name": string,
        "id": number
      }[],
    "user": {
      "name": string
    }
  }[]
};

function Index({courses}: Props) {
  return (
    <Layout>
      <section className="relative flex flex-col items-center justify-center px-6 pt-6 pb-40 overflow-hidden z-[0] text-white bg-blue-600 md:pb-72">
        <div 
          className='absolute top-0 left-0 w-full h-full pointer-events-none z-[0]' 
          style={{
            backgroundImage: 'url(/pattern.png)',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <h1 className="text-4xl font-medium text-center">PLabos</h1>
        <p className="mt-2 text-sm font-thin text-center opacity-70">
          Plataforma colaborativa de cursos online.
        </p>
      </section>
      <section className="-mt-28 md:-mt-48 z-[10] relative">
        <div className="flex flex-wrap justify-center gap-4 px-6 lg:justify-between md:gap-8 md:px-14 lg:px-24">
          <img
            alt="Mulher sorrindo."
            className="md:w-[30%] w-28 object-cover rounded-lg "
            src='/img_pic1.png'
          />
          <img
            alt="Mulher sorrindo."
            className="md:w-[30%] w-28 object-cover rounded-lg"
            src='/img_pic2.png'
          />
          <img
            alt="Mulher sorrindo."
            className="md:w-[30%] w-28 object-cover rounded-lg"
            src='/img_pic3.png'
          />
        </div>
      </section>
      <section className="px-6 pb-10 mt-10 md:px-14 lg:px-24">
        <h2 className="mb-6 text-xl font-semibold md:text-2xl">
          Recentemete adicionados
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.filter((_,index) => index <= 5).map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              image_url={course.image_url}
              user={course.user}
              categories={course.categories}
              id={course.id}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}


export async function getServerSideProps() {
  let coursesData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course`)
  coursesData = await coursesData.json()
  return {
    props: {
      courses: coursesData
    },
  }
}


export default Index;
