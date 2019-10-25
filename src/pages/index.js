/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Articles from "../components/Articles"
import Projects from "../components/Projects"
import Photos from "../components/Photos"

export default props => {
  return (
    <section>
      <div sx={{ py: 6 }}>
        <Styled.h1 sx={{ mb: 2 }}>Carl Barrdahl</Styled.h1>
        <Styled.p sx={{ fontSize: 3, fontWeight: "bold" }}>
          Javascript developer. Based in Gothenburg, Sweden.
        </Styled.p>
      </div>
      <Projects />
      <Articles />
      {/* <Photos /> */}
    </section>
  )
}
