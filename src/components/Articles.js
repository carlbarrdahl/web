/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, Link } from "gatsby";

export default props => {
  const { allDevArticles } = useStaticQuery(articles);

  return (
    <section sx={{ mb: [4, 6] }}>
      <Styled.h2>Articles</Styled.h2>
      <ul sx={{ variant: "styles.list" }}>
        {allDevArticles.edges.map(({ node }) => {
          const { id, title, url, tag_list, ...rest } = node.article;
          console.log(rest);

          return (
            <li key={id} sx={{ mb: 3 }}>
              <Styled.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: 3, display: "block" }}
              >
                {title}
              </Styled.a>
              {tag_list}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const articles = graphql`
  query Articles {
    allDevArticles {
      edges {
        node {
          article {
            id
            title
            description
            published_at
            tag_list
            url
            positive_reactions_count
          }
        }
      }
    }
  }
`;
