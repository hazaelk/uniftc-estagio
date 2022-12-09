import CourseCard from "@/components/CourseCard";
import Layout from "@components/layouts/Default";


type Props = {};

function Index({}: Props) {
  return (
    <Layout>
      <section className="flex px-6 justify-center items-center flex-col text-white bg-blue-600 pt-6 pb-40 md:pb-72">
        <h1 className="text-4xl font-medium text-center">Lorem Ipsum</h1>
        <p className="opacity-70 font-thin text-sm mt-2 text-center">
          Vero eos et accusamus et iusto odio dignissimos.
        </p>
      </section>
      <section className="-mt-28 md:-mt-48">
        <div className="flex justify-center px-6 lg:justify-between gap-4 md:gap-8 flex-wrap md:px-14 lg:px-24">
          <img
            alt="Mulher sorrindo."
            className="md:w-[30%] w-28 object-cover rounded-lg "
            src='/img_pic1.png'
          />
          <img
            alt="Mulher sorrindo."
            className="md:w-[30%] w-28 object-cover rounded-lg"
            src='/img_pic2.png'
          />
          <img
            alt="Mulher sorrindo."
            className="md:w-[30%] w-28 object-cover rounded-lg"
            src='/img_pic3.png'
          />
        </div>
      </section>
      <section className="px-6 md:px-14 lg:px-24 mt-10 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Recentemete adicionados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
    </Layout>
  );
}

export default Index;
