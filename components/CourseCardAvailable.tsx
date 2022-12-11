import Link from "next/link";
import { RefObject, useState, useRef } from 'react'
import { useEventListener } from 'usehooks-ts'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export type PropsCard = {
  title: string,
  tags?: string[],
  cover?: string,
  author: string,
  description: string,
  id: number
};


function CourseCardAvailable({ title, tags, cover, author, description, id }: PropsCard) {
  // const router = useRouter()

  return (
    <div className="transition-all hover:drop-shadow-md bg-white shadow-md rounded-lg p-4 text-[#121212]">
      <img
        alt=""
        className="object-cover w-full h-32 mb-4 rounded-md"
        src={cover || "https://source.unsplash.com/random/?Technology"}
      />
      <div className="mb-1 flex text-[10px] items-center gap-2">
        {tags?.map(tag => {
          return <p className="px-2 py-1 bg-blue-100 border border-blue-200 rounded" key={tag}>
            {tag}
          </p>
        })}
      </div>
      <span className="flex items-center mt-1 mb-4">
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
          <p>{author}</p>
        </span>
      <p className="mb-2 text-lg font-semibold">{title}</p>
      <p className="mb-4 text-sm">
        {description}
      </p>
      <Link href={`/course/${id}`}>
        <button className="bg-[#1294F2] text-white rounded-md w-full py-2 focus:bg-sky-600">
           Mais informações
        </button>
      </Link>
      {/* {isHover && isAdmPage ? (
        <div className="absolute mx-auto bg-transparent top-1/2 left-1/2 z-9">
          <button className="flex items-center px-4 py-2 mb-2 text-sm font-medium text-black transition-all bg-yellow-500 rounded-md shadow-sm lg:text-lg shadow-black drop-shadow-sm hover:bg-yellow-400 focus:bg-yellow-600">
            <span className="mr-1">Editar informações</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

          </button>
          <button className="flex items-center px-4 py-2 mb-2 text-sm font-medium text-white transition-all bg-green-600 rounded-md shadow-sm lg:text-lg shadow-black drop-shadow-sm hover:bg-green-500 focus:bg-green-700">
            <span className="mr-1">Incluir videos aulas</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          </button>
        </div>
      ) : (null)} */}
    </div>
  );
}

export default CourseCardAvailable;
