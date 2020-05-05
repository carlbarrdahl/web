/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

const projects = [
  {
    id: "music-marketplace",
    title: "Marketplace for music creators",
    description:
      "Teach your techniques, share your samples and presets and monetize your project files ",
    url: "/work/music-marketplace",
  },
  {
    id: "swisher",
    title: "Swisher",
    description:
      "Linkable payments with encrypted details to protect your number and payment information",
    url: "/work/swisher",
  },
  {
    id: "b0tt0",
    title: "b0tt0",
    description:
      "Order food and drinks for pickup with built-in queue management and push notifications to stay updated on order changes",
    url: "/work/botto",
  },
  {
    id: "kaleidoscope",
    title: "Kaleidoscope",
    description: "Kaleidoscope camera using WebGL",
    url: "https://kaleidoscope.carlb.dev",
    external: true,
  },

  // {
  //   id: "pakt",
  //   title: "Pakt",
  //   description:
  //     "Create and share challenges with your friends to increase accountability"
  //   // url: "https://pakt.carlb.dev"
  // }
];

export default (props) => {
  return (
    <section sx={{ mb: [4, 6] }}>
      <Styled.h2>Projects</Styled.h2>
      <ul
        sx={{
          display: "grid",
          gridTemplateColumns: ["repeat(auto-fit, minmax(320px, 1fr))"],
          gridColumnGap: 16,
          variant: "styles.list",
        }}
      >
        {projects.map((project) => (
          <li key={project.id}>
            <Styled.h3>{project.title}</Styled.h3>
            <Styled.p>{project.description}</Styled.p>
            <Styled.a
              href={project.url}
              target={project.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              {project.external ? "Open" : "Read more"}
              {/* {project.url} */}
            </Styled.a>
          </li>
        ))}
      </ul>
    </section>
  );
};
