import React from "react"
import { FlexCont } from "../styles/mainStyles"

const Videos = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center"}}>Videos</h1>
      <FlexCont>
        {/* Theo Katzman - Hard Work */}
        <iframe
          title="Hard Work / Break Up Together by Theo Katzman"
          width="450"
          height="250px"
          src="https://www.youtube.com/embed/3qcjptTunXQ"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
        <iframe
          title="Pusher Lover / Case of You by Justin Timberlake and Joni Mitchell performed by Lohai"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/n1knAEiVv0s"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
        <iframe
          title="Caleb Hawley - Dive Bar"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/sCgxpS12L70"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
        <iframe
          title="'91 Maxima Live by Cory Wong"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/kWbQR_k1IFA"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
        <iframe
          title="Cory Wong feat. Charlie Hunter - Gumshu"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/mn6oiEsgzbo"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
        <iframe
          title="Victoria Canal - Second (Live)"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/CCT7RRTRrdE"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
      </FlexCont>
    </div>
  )
}

export default Videos
