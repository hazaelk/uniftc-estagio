import { useEffect, useState, useCallback } from 'react'
import Layout from "@components/layouts/Default";
import Link from "next/link";
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { AiFillPlayCircle } from "react-icons/ai";

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
  const [hasCourse, setHasCourse] = useState<boolean>(false)
  const router = useRouter()
  const session = useSession()

  const checkIfHasCourse = useCallback(() => {
    (async () => {
      if (!session.data) { return}
      if (!session.data.user) { return }
      // @ts-expect-error
      if (!session.data.user.id) { return }
  
      // @ts-expect-error
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/learning/${session.data.user.id}`)

      if (response.status !== 200) {
        setHasCourse(false)
        return
      }
      
      const data = await response.json()
      console.log("User course data:", data)
      const hasCourse = data.find((course: any) => course.id === parseInt(router.query.id as string))
      setHasCourse(!!hasCourse)
    })();
  }, [session, router.query.id])
  
  useEffect(checkIfHasCourse, [checkIfHasCourse])

  const subscribeToCourse = () => {
    return new Promise(async (resolve, reject) => {
      if (!session.data) { reject(); return }
      if (!session.data.user) { reject(); return }
      // @ts-expect-error
      if (!session.data.user.id) { reject(); return }
      if (!router.query || !router.query.id) { reject(); return }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registry/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // @ts-expect-error
          user_id: Number(session.data.user.id),
          course_id: Number(router.query.id),
          is_teacher: false
        })
      })

      if (response.status !== 201) {
        reject()
        return
      }
      const data = await response.json()

      resolve(data)
    })
  }

  return (
    <Layout>
      <div className='w-full h-[30vh] relative overflow-hidden'>
        <div style={{
          backgroundImage: `url(${course.image_url || "https://source.unsplash.com/random/?Computer"})`,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1px)'
        }} />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black' />
        <div className='z-[2] absolute top-1/4 left-12 '>
          <h1 className='text-6xl text-white'>{course.title}</h1>
          <span className='text-sm text-white'>{course.description}</span>
          <button className="bg-[#1294F2] text-white rounded-md w-full py-4 px-4 mt-6 flex items-center hover:bg-blue-400 duration-300" 
          onClick={()=>{
            if (session.status === 'authenticated' && !hasCourse) {
              subscribeToCourse()
              .then(() => {
                setHasCourse(true)
                router.push('/mycourses')
              })
              .catch((e) => {
                console.error(`Error subscribing to course:`, e)
              })

              return
            }

            router.push(session.status === 'authenticated' 
            ? hasCourse
              ? `/watch/${course.id}/${lessons[0].id}`
              : `#`
            : '/login'   )
          }}>
            {session.status === 'authenticated' 
              ? hasCourse
                ? <><AiFillPlayCircle size={24} className='mr-3' /> Assistir</>
                : 'Matricular-se'
              : 'Fazer login'   
            }
          </button>
        </div>
      </div>
      {/* <div className="flex md:flex-row flex-col bg-white shadow-md p-4 gap-8 text-[#121212] w-full">
        <div>
          <img
            alt=""
            className="object-cover w-full h-64 rounded-md"
            src={course.image_url || "https://source.unsplash.com/random/?Computer"}
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
          <button className="bg-[#1294F2] text-white rounded-md w-full py-2" 
          onClick={()=>{
            if (session.status === 'authenticated' && !hasCourse) {
              subscribeToCourse()
              .then(() => {
                setHasCourse(true)
                router.push('/mycourses')
              })
              .catch((e) => {
                console.error(`Error subscribing to course:`, e)
              })

              return
            }

            router.push(session.status === 'authenticated' 
            ? hasCourse
              ? `/watch/${course.id}/${lessons[0].id}`
              : `#`
            : '/login'   )
          }}>
            {session.status === 'authenticated' 
              ? hasCourse
                ? 'Assistir'
                : 'Matricular-se'
              : 'Fazer login'   
            }
          </button>
        </div>
      </div> */}
      <h2 className="px-12 py-4 text-2xl font-medium bg-white shadow">Aulas disponíveis:</h2>
      {lessons.map((lesson, index) => {
        return <Link href={`/watch/${course.id}/${lesson.id}`} key={lesson.id}>
          <div className={`flex md:flex-row flex-col px-12 py-6 gap-8 text-[#121212] hover:bg-gray-400 duration-300 ${index % 2 == 0 ? 'bg-slate-200' : 'bg-white border-t border-b border-black border-opacity-10' }`}>
            <div className="w-4/5">
              <p className="font-semibold">
                {lesson.name}
              </p>
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