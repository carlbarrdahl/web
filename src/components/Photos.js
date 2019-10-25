/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const photos = require("../photos")

export default props => {
  return (
    <section sx={{ mb: [4, 6] }}>
      <Styled.h2>Photo stream</Styled.h2>
      <ul
        sx={{
          display: "grid",
          gridGap: 0,
          bg: "black",
          gridTemplateColumns: ["repeat(auto-fit, minmax(256px, 1fr))"],
          variant: "styles.list"
        }}
      >
        {photos.map(photo => {
          const { creationTime, width, height } = photo.mediaMetadata
          return (
            <li key={photo.id} sx={{}}>
              <a href={`${photo.baseUrl}=w${width}-h${height}`} target="_blank">
                <Styled.img src={photo.baseUrl} />
              </a>
              {/* <div sx={{ color: "white" }}>{format(creationTime)}</div> */}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function format(date) {
  return date.split("T")[0]
}
