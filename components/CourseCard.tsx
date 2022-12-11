import { useRouter } from "next/router";

type Props = {
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
}

function CourseCard({title, description, image_url, categories, user, id}: Props) {
  const router = useRouter()

  return (
    <div className="bg-white shadow-md rounded-lg p-8 pt-6 text-[#121212]">
      <p className="mb-4 text-lg font-semibold">{title}</p>
      <div className="flex justify-between text-sm text-[#828282] mb-4">
        {/* <span className="flex items-center">
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

          <p className="">1 de Janeiro, 2023</p>
        </span> */}
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
          <p>{user.name}</p>
        </span>
      </div>
      {/* <div className="flex flex-col mb-4">
        <p className="font-medium">Matriculados</p>
        <div className="flex items-center mt-4">
          <div className="flex mr-2 -space-x-2">
            <img
              className="object-cover w-12 h-12 border-2 border-white rounded-full"
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
              alt=""
            />
            <img
              className="object-cover w-12 h-12 border-2 border-white rounded-full"
              src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
              alt=""
            />
            <img
              className="object-cover w-12 h-12 border-2 border-white rounded-full"
              src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
              alt=""
            />
          </div>
          <div className="text-sm ">+ 25 Alunos</div>
        </div>
      </div> */}
      <button className="bg-[#1294F2] text-white rounded-lg w-full py-2" onClick={()=>{router.push(`/course/${id}`)}}>
        Ver mais
      </button>
    </div>
  );
}

export default CourseCard;
