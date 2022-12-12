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
      <img
        alt=""
        className="object-cover w-full h-64 mb-2 rounded-md"
        src={
          image_url ||
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        }
      />
      <p className="mb-1 text-2xl font-semibold">{title}</p>
      <div className="flex justify-between text-sm text-[#828282] mb-4">
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
      <p className="mb-12">{description}</p>
      <button className="bg-[#1294F2] text-white rounded-lg w-full py-2" onClick={()=>{router.push(`/course/${id}`)}}>
        Ver mais
      </button>
    </div>
  );
}

export default CourseCard;
