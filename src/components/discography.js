import React from "react"

import { FlexCont, SubHeader } from "../styles/mainStyles"

const Discography = () => {
  const image_width = "300px"

  const discography = [
    {
      id: 1,
      artist: "Theo Katzman",
      albumName: "Modern Johnny",
      albumLink: "https://open.spotify.com/album/5uV5cai6VPXvq9fmtvlRWn",
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
        "https://open.spotify.com/track/1Pi30Em9cF8pKqAhTSULJW?si=c1Gv2fy4RjadNfFRLBifeQ",
      image:
        "https://images.squarespace-cdn.com/content/v1/5b1b10f99772ae4f2afc279e/1583811293121-X8GNCK4KTBY1JQNK6990/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Elevator+Music+LP+art.jpg",
    },
    {
      id: 4,
      artist: "Cory Wong",
      albumName: "Motivational Music",
      albumLink:
        "https://open.spotify.com/album/1i6evjjzyuaYmYX728JwvT",
      image:
        "https://images.squarespace-cdn.com/content/v1/5b1b10f99772ae4f2afc279e/1583937818741-LF76F620V2ODHUK67E7Y/ke17ZwdGBToddI8pDm48kJHUEKwnHaQkrDLfLl_0zHZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFF4sHvmgi8rFwPHCWctdpqxN_Nge5Tg7_qN1KdnjXjLF5WMyhObSUpmckcYl-HWR/CW_AlbumMock_01_Front.jpg",
    },
    {
      id: 5,
      artist: "Caleb Hawley",
      albumName: "Love, Drugs, & Decisions",
      albumLink:
      "https://open.spotify.com/album/6sutFYs1rTcQo4YAZLsMDp?si=X13qDwiCTeaCtJDX6i9aig",
      image:
      "https://f4.bcbits.com/img/a2280449027_10.jpg",
    },
    {
      id: 6,
      artist: "Caleb Hawley",
      albumName: "Sad People",
      albumLink:
      "https://open.spotify.com/album/49W2ZcrHq4khTuQFJpFTe2?si=FOnuCTKESS2VwKjZFn905g",
      image:
      "https://f4.bcbits.com/img/a0573669237_10.jpg",
    },
    {
      id: 7,
      artist: "Ruel",
      albumName: "Real Thing",
      albumLink:
      "https://open.spotify.com/album/49W2ZcrHq4khTuQFJpFTe2?si=FOnuCTKESS2VwKjZFn905g",
      image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F7%2F78%2F%2522Real_Thing%2522_by_Ruel%252C_album_cover.png&f=1&nofb=1",
    },
  ]
  
  return (
    <div>
      <SubHeader>Discography</SubHeader>
      <FlexCont>
        { discography.map(disc => (
          <a
            href={disc.albumLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              width={image_width}
              src={disc.image}
            />
          </a>
        ))}
      </FlexCont>
    </div>
  )
}

export default Discography
