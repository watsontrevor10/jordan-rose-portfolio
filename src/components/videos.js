import React, { useState } from "react"
import ReactPlayer from "react-player"
import { VidFlex, SubHeader, VidThumb } from "../styles/mainStyles"

const Videos = () => {
  const videos = [
    {
      id: 1,
      artist: "Theo Katzman",
      title: "Hard Work / Break Up Together",
      src: "https://www.youtube.com/embed/3qcjptTunXQ",
      img: "https://img.youtube.com/vi/3qcjptTunXQ/0.jpg",
    },
    {
      id: 2,
      artist: "Lohai",
      title: "Pusher Lover / Case of You",
      src: "https://www.youtube.com/embed/n1knAEiVv0s",
      img: "https://img.youtube.com/vi/n1knAEiVv0s/0.jpg",
    },
    {
      id: 3,
      artist: "Caleb Hawley",
      title: "Dive Bar",
      src: "https://www.youtube.com/embed/sCgxpS12L70",
      img: "https://img.youtube.com/vi/sCgxpS12L70/0.jpg",
    },
    {
      id: 4,
      artist: "Cory Wong",
      title: "91 Maxima Live",
      src: "https://www.youtube.com/embed/kWbQR_k1IFA",
      img: "https://img.youtube.com/vi/kWbQR_k1IFA/0.jpg",
    },
    {
      id: 5,
      artist: "Cory Wong feat. Charlie Hunter",
      title: "Gumshu",
      src: "https://www.youtube.com/embed/mn6oiEsgzbo",
      img: "https://img.youtube.com/vi/mn6oiEsgzbo/0.jpg",
    },
    {
      id: 6,
      artist: "Victoria Canal",
      title: "Second (Live)",
      src: "https://www.youtube.com/embed/CCT7RRTRrdE",
      img: "https://img.youtube.com/vi/CCT7RRTRrdE/0.jpg",
    },
    {
      id: 7,
      artist: "Pomplamoose",
      title: "It's the End of the World as We Know It | Pomplamoose ft. dodie & Maddie Poppe",
      src: "https://www.youtube.com/watch?v=fbyO9H7LSkQ",
      img: "https://img.youtube.com/vi/fbyO9H7LSkQ/0.jpg"
    }
  ]

  // state for video playlist selector
  const [playVid, setPlayVid] = useState(videos[0].src)

  return (
    <div>
      {/* <SubHeader>Videos</SubHeader> */}
      <div>
        <VidFlex>
          {/* video playlist selector */}
          {videos.map(vid => (
            <VidThumb>
              <div onClick={() => setPlayVid(vid.src)}>
                <img src={vid.img} />
              </div>
            </VidThumb>
          ))}
        </VidFlex>
        {/* Video player */}
        <div style={{ margin: "0 0 2em auto", height: "35em" }}>
          <ReactPlayer
            url={playVid}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  )
}

export default Videos
