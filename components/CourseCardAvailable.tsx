import Link from "next/link";
import { RefObject, useState, useRef } from 'react'
import { useEventListener } from 'usehooks-ts'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export type Props = {
  title: string,
  tags?: string[],
  cover?: string[],
  author: number,
  description: string,
  id: number
};

function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
): boolean {
  const [value, setValue] = useState<boolean>(false)

  const handleMouseEnter = () => setValue(true)
  const handleMouseLeave = () => setValue(false)

  useEventListener('mouseenter', handleMouseEnter, elementRef)
  useEventListener('mouseleave', handleMouseLeave, elementRef)

  return value
}
function CourseCardAvailable({ title, tags, cover, author, description, id }: Props) {

  const session = useSession() as any
  const router = useRouter()
  const isAdmPage = router.pathname.includes('admin-page')

  if (session.status === 'unauthenticated') {
    router.push('/')
    return <> </>
  }

  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <div ref={hoverRef} className="transition-all hover:drop-shadow-md bg-white shadow-md rounded-lg p-4 text-[#121212]">
      <img
        alt=""
        className="object-cover w-full h-32 mb-4 rounded-md"
        src="https://source.unsplash.com/random/?Technology"
      />
      <div className="mb-4 flex text-[10px] items-center gap-2">
        {tags?.map(tag => {
          return <p className="px-2 py-1 bg-blue-100 border border-blue-200 rounded" key={tag}>
            {tag}
          </p>
        })}
      </div>

      <p className="mb-2 text-lg font-semibold">{title}</p>
      <p className="mb-4 text-sm">
        {description}
      </p>
      <Link href={`/course/${id}`}>
        <button className="bg-[#1294F2] text-white rounded-md w-full py-2 focus:bg-sky-600">
          Matricular
        </button>
      </Link>
      {isHover && isAdmPage ? (
        <div className="absolute left-1/2 -ml-1/2 z-9 bg-transparent">
          <button className="transition-all rounded-md mb-2 text-sm lg:text-lg shadow-black shadow-2xl drop-shadow-2xl flex items-center bg-yellow-700 text-black font-medium px-4 py-2 hover:bg-yellow-600">
            Editar informações
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

          </button>
          <button className="transition-all rounded-md mb-2 text-sm lg:text-lg shadow-black shadow-2xl drop-shadow-2xl flex items-center bg-green-700 text-white font-medium px-4 py-2 hover:bg-green-600">
            Incluir videos aulas
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          </button>
        </div>
      ) : (null)}
    </div>
  );
}

export default CourseCardAvailable;
