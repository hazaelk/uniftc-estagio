import Layout from "@components/layouts/Default";
import { GetServerSideProps } from "next";
import "plyr-react/plyr.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
      name: string;
    };
  };
  lessons: {
    name: string;
    video_uuid: string;
    course_id: number;
    id: number;
  }[];
  currentLesson: number;
};

function Aulas({ lessons, currentLesson }: Props) {
  const router = useRouter()
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const courseID = router.query.courseid as string;
  const lessonID = router.query.lessonid as string;

  const currentClass = lessons.find((lesson) => lesson.id == currentLesson);
  const currentClassIndex = lessons.findIndex(
    (lesson) => lesson.id == currentLesson
  );

  useEffect(() => {
    async function fetVideoURL() {
      const videoRequest = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/video/${currentClass?.video_uuid}`
      );
      const videoURL = await videoRequest.text();
      console.log("Video request", videoURL);
      setVideoURL(videoURL);
    }

    fetVideoURL();
  }, [currentClass]);

  if (!lessons || !currentLesson) {
    return <></>;
  }

  return (
    <Layout protect={true}>
      <div className="flex flex-row w-full h-[calc(100vh-4rem)]">
        <div className="relative flex items-center justify-center w-full h-full bg-black">
          <video
            className="w-full h-full"
            controls
            src={`${process.env.NEXT_PUBLIC_API_URL}/video/${currentClass?.video_uuid}`}
          />
        </div>
        <section className="relative flex flex-col w-1/3 px-2 py-1 bg-blue-600">
          <div className="h-full overflow-x-hidden overflow-y-auto bg-white bg-opacity-20">
              {lessons.map((lesson) => {
                return <Link href={`/watch/${courseID}/${lesson.id}`} key={lesson.id}>
                  <div className={`flex md:flex-row flex-col ${lesson.id === Number(lessonID) ? 'bg-gray-300' : 'bg-white'} p-4 text-[#121212] hover:bg-gray-400 duration-300 my-1`}>
                    <div className="w-4/5">
                      <p className="font-semibold">
                        {lesson.name}
                      </p>
                    </div>
                  </div>
                </Link>
              })}
          </div>
          <div className="flex w-full flex-col bg-white p-8 text-[#121212] self-end justify-self-end place-self-end bg-opacity-60">
              <p className="font-medium">
                {currentClassIndex + 1}/{lessons.length} Aulas -{" "}
                {Math.round(((currentClassIndex + 1) / lessons.length) * 100)}%
                concluído
              </p>
            </div>
        </section>
      </div>
    </Layout>
  );
}

export default Aulas;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (
    !context ||
    !context.params ||
    !context.params.courseid ||
    !context.params.lessonid
  ) {
    return { props: {} };
  }

  let courseData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/course/id/${context.params.courseid}`
  );
  courseData = await courseData.json();

  let classData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/lesson/course/${context.params.courseid}`
  );
  classData = await classData.json();

  return {
    props: {
      course: courseData,
      lessons: classData,
      currentLesson: context.params.lessonid,
    },
  };
};