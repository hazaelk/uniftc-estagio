import CourseCardAvailable from "@/components/CourseCardAvailable";
import Layout from "@components/layouts/Default";

type Props = {
  courses: {
    title: string,
    course_load: number,
    author_id: number,
    description: string,
    image_url: string,
    id: number,
    categories: {
        name: string,
        id: number
      }[],
    user: {
      name: string
    }
  }[]
};

function CourseList({courses}: Props) {

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center px-6 pt-6 pb-10 text-white bg-blue-600">
        <h1 className="text-4xl font-medium text-center">Cursos disponíveis</h1>
      </section>
      <section className="px-6 mt-10 md:px-14 lg:px-24 ">
        <h2 className="mb-6 text-xl font-semibold md:text-2xl">
        Populares
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.reverse().map(course => (
            <CourseCardAvailable
              id={course.id}
              title={course.title}
              author={course.user.name}
              description={course.description}
              cover={course.image_url}
              key={course.id} 
            />
          )).splice(0, 3)}
        </div>
      </section>
      <section className="px-6 pb-10 mt-10 md:px-14 lg:px-24">
        <h2 className="mb-6 text-xl font-semibold md:text-2xl">
        Todos os cursos
        </h2>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
            <CourseCardAvailable
              id={course.id}
              title={course.title}
              author={course.user.name}
              description={course.description}
              key={course.id} 
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}


export async function getServerSideProps() {
  let coursesData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course`)
  coursesData = await coursesData.json()
  return {
    props: {
      courses: coursesData
    },
  }
}


export default CourseList;
