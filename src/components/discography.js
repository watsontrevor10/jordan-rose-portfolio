import React from "react"

import { FlexCont, SubHeader } from "../styles/mainStyles"

const Discography = () => {
  const image_width = "300px"

  // List of all albums
  const discography = [
    {
      id: 1,
      artist: "Theo Katzman",
      albumName: "Modern Johnny",
      albumLink:
        "https://open.spotify.com/album/5uV5cai6VPXvq9fmtvlRWn?highlight=spotify:track:08F9kUK06EzJVWNsus1Xgq",
      songs: "Darlin' don't Be Late",
      image:
        "https://cdn.shopify.com/s/files/1/1693/9217/products/42205_370x.jpg?v=1578602950",
    },
    {
      id: 2,
      artist: "Theo Katzman",
      albumName: "Live in Berlin",
      albumLink:
        "https://open.spotify.com/album/3ZG1uBVhfvxpmYWn4GBOP8?si=Mxe9GKapSoqUe4jBP59I6w",
      image:
        "https://cdn.shopify.com/s/files/1/1693/9217/products/41110_370x.png?v=1554305217",
    },
    {
      id: 3,
      artist: "Cory Wong",
      albumName: "Elevator Music",
      albumLink:
        "https://open.spotify.com/album/1LL5VZdY7CBXScXB0oQ4tB?highlight=spotify:track:1Pi30Em9cF8pKqAhTSULJW",
      songs: "Airplane Mode",
      image:
        "https://images.squarespace-cdn.com/content/v1/5b1b10f99772ae4f2afc279e/1583811293121-X8GNCK4KTBY1JQNK6990/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Elevator+Music+LP+art.jpg",
    },
    {
      id: 4,
      artist: "Cory Wong",
      albumName: "Motivational Music",
      albumLink:
        "https://open.spotify.com/album/1i6evjjzyuaYmYX728JwvT?highlight=spotify:track:0OwdyCX2c7vFySNR0Um0hY",
      image:
        "https://images.squarespace-cdn.com/content/v1/5b1b10f99772ae4f2afc279e/1583937818741-LF76F620V2ODHUK67E7Y/ke17ZwdGBToddI8pDm48kJHUEKwnHaQkrDLfLl_0zHZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFF4sHvmgi8rFwPHCWctdpqxN_Nge5Tg7_qN1KdnjXjLF5WMyhObSUpmckcYl-HWR/CW_AlbumMock_01_Front.jpg",
    },
    {
      id: 8,
      artist: "Cory Wong",
      albumName: "Live in the U.K.",
      albumLink:
        "https://open.spotify.com/album/5fZtMfM1XlAcjDzxTIOBa8?si=Vd4KMpxRToe4cvdeBGrowA",
      image:
        "https://images.squarespace-cdn.com/content/v1/5b1b10f99772ae4f2afc279e/1560956871251-PMGLTPRT8BS9OVRKPQ8B/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/CW_UKCover+4000x4000.jpeg?format=500w",
    },
    {
      id: 5,
      artist: "Caleb Hawley",
      albumName: "Love, Drugs, & Decisions",
      albumLink:
        "https://open.spotify.com/album/6sutFYs1rTcQo4YAZLsMDp?si=X13qDwiCTeaCtJDX6i9aig",
      image: "https://f4.bcbits.com/img/a2280449027_10.jpg",
    },
    {
      id: 6,
      artist: "Caleb Hawley",
      albumName: "Sad People",
      albumLink:
        "https://open.spotify.com/album/49W2ZcrHq4khTuQFJpFTe2?si=FOnuCTKESS2VwKjZFn905g",
      image: "https://f4.bcbits.com/img/a0573669237_10.jpg",
    },
    {
      id: 7,
      artist: "Ruel",
      albumName: "Real Thing",
      albumLink:
        "https://open.spotify.com/album/5nY5rwvNxKgCdKTaj6hOqU?si=p2KnN-qKTxSjtinVG7n7Kw",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F7%2F78%2F%2522Real_Thing%2522_by_Ruel%252C_album_cover.png&f=1&nofb=1",
    },
    {
      id: 8,
      artist: "Lohai",
      albumName: "Neighborhood Secrets",
      albumLink:
        "https://open.spotify.com/track/6HEZs5N7b62Vn0Emg6wMyz?si=1pylda6lRWSaeJoyJdgFQw",
      image: "https://i.scdn.co/image/ab67616d00001e028a061d34736bbc989be86f44",
    },
  ]

  return (
    <div>
      <FlexCont>
        {discography.map(disc => (
          <a href={disc.albumLink} target="_blank" rel="noopener noreferrer">
            <img width={image_width} src={disc.image} alt={disc.albumName} />
          </a>
        ))}
      </FlexCont>
    </div>
  )
}

export default Discography
