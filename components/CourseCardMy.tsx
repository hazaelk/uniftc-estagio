type Props = {};

function CourseCardMy({}: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-[#121212] cursor-pointer">
      <img
        alt=""
        className="w-full h-32 object-cover rounded-md mb-4"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      />
      <p className="font-semibold mb-2 text-lg">Ciência da Computação</p>
      <p className="text-sm mb-4">
        Desenvolvimento de Apps Comerciais com Python e Kivy para Android, iOS,
        Windows, Linux e MacOS (Básico ao Avançado)
      </p>
      <div>
        <div className="flex justify-between items-center mb-2 text-xs font-medium">
          <p>Progresso</p>
          <p>75%</p>
        </div>
        <div className="w-full h-1 rounded bg-gray-100">
          <div className="w-3/4 h-1 rounded bg-blue-500"/>
        </div>
      </div>
    </div>
  );
}

export default CourseCardMy;
