import React from "react"

import { FlexCont } from "../styles/mainStyles"

const Discography = () => {
  const image_width = "200px"
  return (
    <div>
      <h1 style={{ textAlign: "center"}}>Discography</h1>
      <FlexCont>
        {/* Theo Katzman - Modern Johnny */}
        <img
          width={image_width}
          src="https://cdn.shopify.com/s/files/1/1693/9217/products/42205_370x.jpg?v=1578602950"
        />
        {/* Theo Katzman - Live in Berlin */}
        <img
          width={image_width}
          src="https://cdn.shopify.com/s/files/1/1693/9217/products/41110_370x.png?v=1554305217"
        />
        {/* Cory Wong - Elevator music */}
        <img
          width={image_width}
          src="https://images.squarespace-cdn.com/content/v1/5b1b10f99772ae4f2afc279e/1583811293121-X8GNCK4KTBY1JQNK6990/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Elevator+Music+LP+art.jpg"
        />
        {/* Cory Wong - Motivational Music */}
        <img
          width={image_width}
          src="https://images.squarespace-cdn.com/content/v1/5b1b10f99772ae4f2afc279e/1583937818741-LF76F620V2ODHUK67E7Y/ke17ZwdGBToddI8pDm48kJHUEKwnHaQkrDLfLl_0zHZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFF4sHvmgi8rFwPHCWctdpqxN_Nge5Tg7_qN1KdnjXjLF5WMyhObSUpmckcYl-HWR/CW_AlbumMock_01_Front.jpg"
        />
        {/* Caleb Hawley - Love, Drugs, & Decisions */}
        <img
          width={image_width}
          src="https://f4.bcbits.com/img/a2280449027_10.jpg"
        />
        <img
          width={image_width}
          src="https://f4.bcbits.com/img/a0573669237_10.jpg"
        />
      </FlexCont>
    </div>
  )
}

export default Discography
