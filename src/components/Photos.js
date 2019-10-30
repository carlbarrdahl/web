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

export default props => {
  const { loading, photos } = useGooglePhotos("EsU5tsXbq6VG6df9A")
  return loading ? (
    <pre>...</pre>
  ) : (
    <section sx={{ mb: [4, 6], mx: -2 }}>
      <Styled.h2>Photo stream</Styled.h2>
      <ul
        sx={{
          display: "grid",
          gridGap: 0,
          bg: "black",
          gridTemplateColumns: ["repeat(auto-fit, minmax(160px, 1fr))"],
          variant: "styles.list"
        }}
      >
        {photos.map(photo => {
          return (
            <li key={photo}>
              <a href={`${photo}=w${1024}`} target="_blank">
                <Styled.img src={`${photo}=w${320}`} sx={{width: "100%"}} />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
