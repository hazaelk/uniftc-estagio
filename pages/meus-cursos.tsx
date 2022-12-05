import CourseCard from "@/components/CourseCard";
import CourseCardAvailable from "@/components/CourseCardAvailable";
import CourseCardMy from "@/components/CourseCardMy";
import Layout from "@components/layouts/Default";

type Props = {};

function Cursos({}: Props) {
  return (
    <Layout>
      <section className="flex px-6 justify-center items-center flex-col text-white bg-blue-600 pt-6 pb-10">
        <h1 className="text-4xl font-medium text-center">Meus Cursos</h1>
      </section>
      <section className="px-6 md:px-14 lg:px-24 mt-10 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Filtros</h2>
        <div className="flex gap-2 mb-4">
          <button className="flex items-center text-[#4F4F4F] justify-center rounded-md px-4 py-1 text-sm border border-[#D3D2D2]">
            Categoria
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 -mr-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className="flex items-center text-[#4F4F4F] justify-center rounded-md px-4 py-1 text-sm border border-[#D3D2D2]">
            Ordem
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 -mr-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CourseCardMy />
          <CourseCardMy />
        </div>
      </section>
    </Layout>
  );
}

export default Cursos;
