import { useState } from "react"

const Producto = ({ nombre, descripcion }) => {
    const [showDescripcion, setShowDescripcion] = useState(false)

    return (
        <div className="flex flex-col bg-green-100 p-4 rounded-lg shadow-md mt-2 w-max m-auto">
            <h2 className="text-xl text-center font-bold">{nombre}</h2>
            <hr className="mb-1"/>

            {showDescripcion ? <p>{descripcion}</p> : null}

            <button
                onClick={() => setShowDescripcion(!showDescripcion)}
                className="py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-lg mt-4 m-auto"
            >
                {showDescripcion ? "Ver menos" : "Ver más"}
            </button>
        </div>
    )
}

export default Producto