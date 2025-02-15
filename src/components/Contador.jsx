import { useState } from "react"

const Contador = ({ limite }) => {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col bg-yellow-100 p-4 rounded-lg shadow-md mt-2 w-max m-auto">
            <p className="text-xl font-bold">Contador: {count}</p>
            <hr className="mb-1"/>
            <button
                onClick={() => setCount(count + 1)}
                disabled= {count >= limite}
                className={`px-4 py-2 mt-2 rounded-lg ${count >= limite ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-700 text-white"}`}
            >
                Incrementar
            </button>
        </div>
    )
}

export default Contador