import Layout from "@components/layouts/Default";
import { useState } from "react";

function AdminPage() {
    const [divFilter, setDivFilter] = useState<boolean>(false)
    function handleClick() {
        setDivFilter(!divFilter)
        console.log(divFilter)
    }
    const [currentElementFilter, setCurrentElementFilter] = useState<string>()
    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setCurrentElementFilter(value)
    }

    return (
        <Layout>
            <section className="p-4">
                <button onClick={handleClick}
                    className="bg-[#1294F2] text-white rounded-md w-full py-2">
                    Editar cursos
                </button>
                <div style={{ display: `${divFilter ? 'block' : 'none'}` }} className={''}>
                        <div className="">
                            Escolha o filtro abaixo
                        </div>
                        <select className="bg-gray-50 border border-sky-500 text-gray-900 mb-6 text-sm rounded-lg outline-sky-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required value={currentElementFilter} onChange={selectChange}>
                            <option selected value="course_id">Id do curso</option>
                            <option value="author_id">Id do autor</option>
                        </select>
                    {currentElementFilter && <h2 style={{color: 'red'}}>{currentElementFilter}</h2>}

                </div>
            </section>
        </Layout>
    )
}
export default AdminPage;