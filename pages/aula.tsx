import CourseCard from "@/components/CourseCard";
import CourseCardAvailable from "@/components/CourseCardAvailable";
import CourseCardMy from "@/components/CourseCardMy";
import Layout from "@components/layouts/Default";
import Link from "next/link";

type Props = {};

function Aulas({}: Props) {
  return (
    <Layout>
      <section className="p-4 bg-blue-600 h-full">
        <div className="flex  bg-white shadow-md rounded p-8 gap-4 text-[#121212]">
          <div className="w-2/3">
            <p className="font-semibold">
              01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="text-xs mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <p className="font-medium">6/13 Aulas - 46% de progresso</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Aulas;
