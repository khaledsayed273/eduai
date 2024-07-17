import React from "react"

function VideoComponent({ src }) {
    

return (
    <video
        className="object-fill rounded-xl overflow-hidden h-full w-full"
        controls>
        <source src={src} type="video/mp4" />
    </video>
)
}

export default VideoComponent
