import Layout from "@components/layouts/Default";
import { GetServerSideProps } from "next";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { useState, useEffect } from 'react';

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
	}[],
  currentLesson: number
};

function Aulas({lessons, currentLesson}: Props) {
  const [videoURL, setVideoURL] = useState<string | null>(null)
  
  const currentClass = lessons.find((lesson) => lesson.id == currentLesson)
  const currentClassIndex = lessons.findIndex((lesson) => lesson.id == currentLesson)
  
  useEffect(()=>{
    async function fetVideoURL() {
      const videoRequest = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video/${currentClass?.video_uuid}`)
      const videoURL = await videoRequest.text()
      console.log("Video request", videoURL)
      setVideoURL(videoURL)
    }

    fetVideoURL()
  }, [currentClass])

  if (!lessons || !currentLesson) {
    return <>
    </>
  }

  
  return (  
    <Layout protect={true}>
      <div className="relative flex items-center justify-center w-full bg-black h-[80vh]">
        <Plyr  source={{
          type: 'video',
          title: currentClass?.name,
          sources: [
            { src: `${process.env.NEXT_PUBLIC_API_URL}/video/${currentClass?.video_uuid}`, type: ' video/mp4' }
          ]
        }} className='w-full h-full'/>
      </div>
      <section className="h-full p-4 bg-blue-600">
        <div className="flex  bg-white shadow-md rounded p-8 gap-4 text-[#121212]">
          <div className="w-2/3">
            <p className="font-semibold">
              {currentClass?.name || 'Nome aula'}
            </p>
            <p className="mt-1 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/3 border-l border-black">
            <p className="font-medium">{currentClassIndex+1}/{lessons.length} Aulas - {Math.round((currentClassIndex+1)/lessons.length*100)}% concluído</p>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Aulas;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context || !context.params || !context.params.courseid || !context.params.lessonid) { return { props: {} }}
  
  let courseData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/id/${context.params.courseid}`)
  courseData = await courseData.json()

  let classData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lesson/course/${context.params.courseid}`)
  classData = await classData.json()

  return {
    props: {
      course: courseData,
      lessons: classData,
      currentLesson: context.params.lessonid
    },
  }
}