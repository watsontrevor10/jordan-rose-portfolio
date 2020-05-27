import React from "react"
import { FlexCont, SubHeader } from "../styles/mainStyles"

const Videos = () => {

  const videos = [
    {
      id: 1, 
      artist: "Theo Katzman", 
      title: "Hard Work / Break Up Together", 
      src: "https://www.youtube.com/embed/3qcjptTunXQ", 
    },
    {
      id: 2, 
      artist: "Lohai", 
      title: "Pusher Lover / Case of You", 
      src: "https://www.youtube.com/embed/n1knAEiVv0s", 
    },
    {
      id: 3, 
      artist: "Caleb Hawley", 
      title: "Dive Bar", 
      src: "https://www.youtube.com/embed/sCgxpS12L70", 
    },
    {
      id: 4, 
      artist: "Cory Wong", 
      title: "91 Maxima Live", 
      src: "https://www.youtube.com/embed/kWbQR_k1IFA", 
    },
    {
      id: 5, 
      artist: "Cory Wong feat. Charlie Hunter", 
      title: "Gumshu", 
      src: "https://www.youtube.com/embed/mn6oiEsgzbo", 
    },
    {
      id: 6, 
      artist: "Victoria Canal", 
      title: "Second (Live)", 
      src: "https://www.youtube.com/embed/CCT7RRTRrdE", 
    },
  ]

  return (
    <div>
      <SubHeader>Videos</SubHeader>
      <FlexCont>
        { videos.map(vid => (
          <iframe 
            title={vid.title}
            width="450px"
            height="250px"
            src={vid.src}
            frameBorder="0"
          >

          </iframe>
        ))}
      </FlexCont>
    </div>
  )
}

export default Videos
