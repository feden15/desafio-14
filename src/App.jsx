// rafce

import Contador from "./components/Contador"
import LikeButton from "./components/LikeButton"
import Producto from "./components/Producto"
import UserCard from "./components/UserCard"

const App = () => {
  return (
    <>
      <UserCard nombre="Federico Nova" edad="25" profesion="Desarrollador Web"/>
      <hr className="m-2"/>

      <LikeButton/>
      <hr className="m-2"/>
      
      <Producto nombre="Computadora" descripcion="Dispositivo electrónico que procesa información mediante hardware y software"/>
      <hr className="m-2"/>

      <Contador limite={5}/>
    </>
  )
}

export default App