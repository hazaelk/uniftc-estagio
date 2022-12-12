import { useSession } from 'next-auth/react';
import DefaultLayout from '@/components/layouts/Default';
import { useForm } from "react-hook-form";
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';
import Link from 'next/link'
import { Dialog } from '@headlessui/react';

type FormData = {
  title: string,
  description: string,
  image: FileList,
  categories: string
};

type category = {
  name: string,
  id: string
};

type Props = {
  course?:   {
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
  }
  lessons?: {
    name: string;
    video_uuid: string;
    course_id: number;
    id: number;
  }[]
};

function Upload({course, lessons}:Props) {
  const session = useSession()
  const [error, setError] = useState<string | null>(null)
  let [isLessonModalOpen, setLessonModalOpen] = useState(true)
  const router = useRouter()
  const [lessonSource, setLessonSource] = useState<any>(null)
  const [lessonName, setLessonName] = useState<any>(null)

  // @ts-expect-error
  if (session.status === 'authenticated' &&course && course.user.name !== session.data?.user.name) {
    console.log("THIS COURSE IS NOT YOURS")
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  const onSubmit = (data:FormData) => { 
    if (!!course) { return }

    ensureCategories(data.categories.split(','))
    .then(()=>{
      createCourse(data)
      .then( (course:any) => {
        router.push(`/upload?id=${course.id}`)
      })
    })
  }

  const ensureCategories = async (categories: string[]) => {
    if (categories.length === 0) {
      setError("Você precisa adicionar pelo menos uma categoria")
      return false
    }

    const categoriesRequest = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`)
    const categoriesData = await categoriesRequest.json() as category[]

    const missingCategories = categories.filter( (cat:string) => !categoriesData.map((c: category) => c.name.toLowerCase() ).includes(cat.toLowerCase()) )
    // const matchingCategories = categoriesData.filter( (cat:category) => categories.map((c: string) => c.toLowerCase() ).includes(cat.name.toLowerCase()) )

    for (const categoryName in missingCategories) {
      const registerCategoryRequest = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: categoryName})
      })

      if (registerCategoryRequest.status !== 201) {
        setError("Erro ao registrar categoria: " + categoryName)
        return false
      }
    }
  }

  const createCourse = async (formData: any) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          image_url: formData.image,
          //@ts-expect-error
          author_id: session.data!.user.id,
          course_load: 0
        })
      })
      console.log("response", response )
      if (response.status !== 200) {
        reject("Erro ao criar curso")
        setError("Erro ao criar curso")
        return
      }

      const data = await response.json()
      resolve(data)
    })
  }



  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    setLessonSource(file);
  };

  const handleLessonNameChange = (event:any) => {
    setLessonName(event.target.value)
  }

  
  return <>
    <Dialog
      open={isLessonModalOpen}
      onClose={() => setLessonModalOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-full max-w-4xl p-4 mx-auto bg-white rounded">
          <Dialog.Title>Upload aula</Dialog.Title>
          <form 
            className='flex flex-col w-full'
            onSubmit={(e)=>{
              e.preventDefault();
              console.log(
                "lessonName", lessonName,
                "lessonSource", lessonSource,
              )

              if (!lessonName || !lessonSource) {
                return
              }

              const formData = new FormData();
              formData.append('file', lessonSource);
              console.log(session.data)
              //@ts-expect-error
              console.log(session.data.user.access_token)
              fetch(`${process.env.NEXT_PUBLIC_API_URL}/video/upload`, {	
                method: 'POST',
                body: formData,
                headers: {
                  'lesson-name': lessonName,
                  'course-id': router.query.id as string,
                  //@ts-expect-error
                  'Authorization': `Bearer ${session.data.user.access_token}`
                }
              })
              .then(()=>{
                router.reload()
              })
            }}
          >
            <label className='mb-1.5'  >Título</label>
            <input className='p-2 mb-2 rounded-md shadow-sm lesson' onChange={handleLessonNameChange} />
            <label className='mb-1.5' >Video</label>
            <input
              type="file"
              className='lesson'
              onChange={handleFileChange} 
            />
            {lessonSource && <video src={URL.createObjectURL(lessonSource)} controls className='my-4'></video> }
            <button className='p-2 mt-4 text-white bg-blue-600 rounded-md'>Enviar</button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
    <DefaultLayout protect>
      <section className='flex flex-col w-full h-full mx-auto my-8 md:w-1/2'>
        {error && <div className='w-full p-2 my-4 text-white bg-red-500 rounded-md shadow-sm'>{error}</div> }
        <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
          <label className='mb-1.5'>Título</label>
          <input disabled={!!course} value={course && course.title} className='p-2 mb-2 rounded-md shadow-sm' {...register("title", { required: true })} />
          <label className='mb-1.5'>Descrição</label>
          <input disabled={!!course} value={course && course.description} className='p-2 mb-2 rounded-md shadow-sm' {...register("description", { required: true })} />
          <label className='mb-1.5'>Categorias</label>
          <input disabled={!!course} value={course?.categories.map(category => category.name)} className='p-2 mb-2 rounded-md shadow-sm' {...register("categories", { required: true })} />
          <label className='mb-1.5'>Imagem</label>
          <input disabled={!!course} className='p-2 mb-2 rounded-md shadow-sm' {...register("image", { required: true })} />
          <button disabled={!!course} className='px-2 py-2 text-white duration-300 bg-blue-600 rounded-md hover:bg-blue-400 disabled:bg-slate-600'>Enviar</button>
        </form>
        {course && <>
          <span className='mt-2 mb-1.5'>Aulas:</span>
          <div className='w-full h-full p-4 overflow-x-hidden overflow-y-scroll bg-white rounded-md'>
            {lessons && lessons.map((lesson, index) => (
              // eslint-disable-next-line react/jsx-no-undef
              <Link href={`/watch/${course.id}/${lesson.id}`} key={index} className='flex flex-row items-center justify-between w-full p-2 mb-2 duration-300 border border-gray-300 rounded-md hover:bg-blue-600 hover:bg-opacity-20'>
                <span>{lesson.name}</span>
              </Link>
            ))}
            <button  
              className='w-full p-2 text-white duration-300 bg-blue-600 rounded-md hover:bg-blue-400'
              onClick={()=>{
                setLessonModalOpen(true)
              }}
            >Adicionar</button>
          </div>
        </>}
      </section>
    </DefaultLayout>
  </>
}

export default Upload


export const getServerSideProps: GetServerSideProps = async (context) => {

  if (!context || !context.query || !context.query.id) { return { props: {} }}
  
  let courseData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/id/${context.query.id}`)
  courseData = await courseData.json()

  let lessonData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lesson/course/${context.query.id}`)
  lessonData = await lessonData.json()

  return {
    props: {
      course: courseData,
      lessons: lessonData
    },
  }
}