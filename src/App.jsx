// rafce

import LikeButton from "./components/LikeButton"
import UserCard from "./components/UserCard"

const App = () => {
  return (
    <>
      <UserCard nombre="Federico Nova" edad="25" profesion="Desarrollador Web"/>
      <hr className="m-2"/>
      
      <LikeButton/>
    </>
  )
}

export default App