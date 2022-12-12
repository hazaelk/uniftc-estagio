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
    <div className="transition-all hover:drop-shadow-md bg-white shadow rounded-lg p-4 text-[#121212]">
      <img
        alt=""
        className="object-cover w-full mb-4 rounded-md h-52"
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
    </div>
  );
}

export default CourseCardAvailable;
