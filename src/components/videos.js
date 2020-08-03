import React, { useState } from "react"
import ReactPlayer from "react-player"
import { VidFlex, VidThumb } from "../styles/mainStyles"

const Videos = () => {
  const videos = [
    {
      artist: "Theo Katzman",
      title: "Hard Work / Break Up Together",
      src: "https://www.youtube.com/embed/3qcjptTunXQ",
      img: "https://img.youtube.com/vi/3qcjptTunXQ/0.jpg",
    },
    {
      artist: "Lohai",
      title: "Pusher Lover / Case of You",
      src: "https://www.youtube.com/embed/n1knAEiVv0s",
      img: "https://img.youtube.com/vi/n1knAEiVv0s/0.jpg",
    },
    {
      artist: "Caleb Hawley",
      title: "Dive Bar",
      src: "https://www.youtube.com/embed/sCgxpS12L70",
      img: "https://img.youtube.com/vi/sCgxpS12L70/0.jpg",
    },
    {
      artist: "Cory Wong",
      title: "91 Maxima Live",
      src: "https://www.youtube.com/embed/kWbQR_k1IFA",
      img: "https://img.youtube.com/vi/kWbQR_k1IFA/0.jpg",
    },
    {
      artist: "Cory Wong feat. Charlie Hunter",
      title: "Gumshu",
      src: "https://www.youtube.com/embed/mn6oiEsgzbo",
      img: "https://img.youtube.com/vi/mn6oiEsgzbo/0.jpg",
    },
    {
      artist: "Victoria Canal",
      title: "Second (Live)",
      src: "https://www.youtube.com/embed/CCT7RRTRrdE",
      img: "https://img.youtube.com/vi/CCT7RRTRrdE/0.jpg",
    },
    {
      artist: "Pomplamoose",
      title:
        "It's the End of the World as We Know It | Pomplamoose ft. dodie & Maddie Poppe",
      src: "https://www.youtube.com/watch?v=fbyO9H7LSkQ",
      img: "https://img.youtube.com/vi/fbyO9H7LSkQ/0.jpg",
    },
  ]

  // state for video playlist selector, initially set, changes state when you select a video thumbnail in playlist selector
  const [playVid, setPlayVid] = useState(videos[0].src)

  return (
    <div>
      <div>
        <VidFlex>
          {/* video playlist selector, uses YouTube thumbnails as images for gallery view */}
          {videos.map(vid => (
            <VidThumb key={vid.i}>
              <div onClick={() => setPlayVid(vid.src)}>
                <img src={vid.img} alt={vid.title} />
              </div>
            </VidThumb>
          ))}
        </VidFlex>
        {/* Video player, switches video to whatever is selected in playlist selector */}
        <div style={{ margin: "0 0 2em auto", height: "35em" }}>
          <ReactPlayer url={playVid} width="100%" height="100%" />
        </div>
      </div>
    </div>
  )
}

export default Videos
