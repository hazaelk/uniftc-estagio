type Props = {
  title: string
  image: string
  description: string
  categories?: {
    name: string
    id: number
  }[]
};

function CourseCardMy({title, image, description, categories}: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-[#121212] cursor-pointer">
       { categories && categories.length > 0 && <div className="mb-4 flex text-[10px] items-center gap-2">
          {categories.map((category) => {
            return <p className="px-2 py-1 bg-blue-100 border border-blue-200 rounded" key={`cat.${category.id}`}>
              {category.name}
            </p>
          })}
        </div> }
      <img
        alt=""
        className="object-cover w-full h-32 mb-4 rounded-md"
        src={image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}
      />
      <p className="mb-2 text-lg font-semibold">{title || 'Nome do curso'}</p>
      <p className="mb-4 text-sm">
        {description || 'Descrição do curso.'}
      </p>
      {/* <div>
        <div className="flex items-center justify-between mb-2 text-xs font-medium">
          <p>Progresso</p>
          <p>75%</p>
        </div>
        <div className="w-full h-1 bg-gray-100 rounded">
          <div className="w-3/4 h-1 bg-blue-500 rounded"/>
        </div>
      </div> */}
    </div>
  );
}

export default CourseCardMy;
