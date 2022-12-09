import Link from "next/link";

export type Props = {
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
