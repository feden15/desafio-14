import { useState } from "react"

const LikeButton = () => {
    const [liked, setLiked] = useState(true)

  return (
    <div className="flex justify-center">
        <button
            onClick={() => setLiked(!liked)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
        >
            {liked ? "Like" : "Unlike"}
        </button>
    </div>
  )
}

export default LikeButton