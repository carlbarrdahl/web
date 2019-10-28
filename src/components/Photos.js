/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { useState, useEffect } from "react"

function useGooglePhotos(albumId) {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`/.netlify/functions/photos?album=${albumId}`)
      .then(res => res.json())
      .then(setPhotos)
      .finally(() => setLoading(false))
  }, [])

  return { loading, photos }
}

const ALBUM_ID = "EsU5tsXbq6VG6df9A"
export default props => {
  const { loading, photos } = useGooglePhotos(ALBUM_ID)

  console.log(loading, photos)

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
          return (
            <li key={photo.id} sx={{}}>
              <a href={`${photo}=w${1024}`} target="_blank">
                <Styled.img src={`${photo}=w${256}`} />
              </a>
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
