/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const projects = [
  {
    id: "swisher",
    title: "Swisher",
    description:
      "Linkable payments with encrypted details to protect your number and payment information",
    url: "https://swisher.carlb.dev"
  },
  {
    id: "b0tt0",
    title: "b0tt0",
    description:
      "Order food and drinks for pickup with built-in queue management and push notifications to stay updated on order changes",
    url: ""
  },
  {
    id: "pakt",
    title: "Pakt",
    description:
      "Create and share challenges with your friends to increase accountability"
    // url: "https://pakt.carlb.dev"
  }
]

export default props => {
  return (
    <section sx={{ mb: [4, 6] }}>
      <Styled.h2>Projects</Styled.h2>
      <ul
        sx={{
          display: "grid",
          gridTemplateColumns: ["repeat(auto-fit, minmax(256px, 1fr))"],
          variant: "styles.list"
        }}
      >
        {projects.map(project => (
          <li key={project.id}>
            <Styled.h3>{project.title}</Styled.h3>
            <Styled.p>{project.description}</Styled.p>
            <Styled.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </Styled.a>
          </li>
        ))}
      </ul>
    </section>
  )
}
