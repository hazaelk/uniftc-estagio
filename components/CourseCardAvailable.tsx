import Link from "next/link";

type Props = {
  title: string,
  tags?: string[],
  cover?: string[],
  author: number,
  description: string,
  id: number
};

function CourseCardAvailable({title, tags, cover, author, description, id}: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-[#121212]">
      <img
        alt=""
        className="object-cover w-full h-32 mb-4 rounded-md"
        src="https://source.unsplash.com/random/?Technology"
      />
      <div className="mb-4 flex text-[10px] items-center gap-2">
        {tags?.map( tag => {
          return <p className="px-2 py-1 bg-blue-100 border border-blue-200 rounded" key={tag}>
            {tag}
          </p>
        })}
      </div>
      {/* <div className="flex justify-between text-xs text-[#828282] mb-2">
        <span className="flex items-center">
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
          <p>1 de Janeiro, 2023</p>
        </span>
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
          <p>[Author]</p>
        </span>
      </div> */}
      <p className="mb-2 text-lg font-semibold">{title}</p>
      <p className="mb-4 text-sm">
       {description}
      </p>
      <Link href={`/course/${id}`}>
        <button className="bg-[#1294F2] text-white rounded-md w-full py-2">
          Matricular
        </button>
      </Link>
    </div>
  );
}

export default CourseCardAvailable;
