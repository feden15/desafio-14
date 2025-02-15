// rafce

const UserCard = ({ nombre, edad, profesion }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md mt-2 w-max m-auto">
      <h2 className="text-xl text-center font-bold">{nombre}</h2>
      <hr className="mb-1"/>
      <p>Edad: {edad}</p>
      <p>Profesión: {profesion}</p>
    </div>
  )
}

export default UserCard