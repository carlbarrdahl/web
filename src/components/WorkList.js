import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

const List = styled("div")`flex flex-wrap nr2 nl2`
const Card = styled("div")`w-100 w-50-l pa2 no-underline dark-gray dim`
Card.Content = styled("div")`pa4 ba b--black-10`
const Title = styled("h3")`f2 mb1 mt0`
const Description = styled("h4")`f4 lh-copy normal mt0 measure`
const URL = styled("div")``

export default () => (
  <List>
    {works.map((work, i) => (
      <Card to={work.href} key={work.href}>
        <Card.Content>
          <Title>{work.title}</Title>
          <Description>{work.description}</Description>
          {work.url && (
            <URL>
              <a href={work.url} target="_blank" rel="noopener">
                {work.url}
              </a>
            </URL>
          )}
        </Card.Content>
      </Card>
    ))}
  </List>
)

const works = [
  {
    title: "Swisher",
    description:
      "Share your Swish payments with number and payment data encrypted",
    href: "/work/swisher",
    url: "https://swisher-app.firebaseapp.com"
  },
  {
    title: "Pakt",
    description:
      "Create, manage and sign digital contracts using the mobile app BankID",
    href: "/work/pakt",
    url: "https://pakt-dev.firebaseapp.com"
  }
  // {
  //   title: "Adfenix",
  //   description: "Housing recommendations powered by machine learning",
  //   href: "/work/adfenix"
  // },
  // {
  //   title: "Knodd",
  //   description:
  //     "e-health startup which connects patients and caregivers with mobile technology",
  //   href: "/work/knodd"
  // },
  // {
  //   title: "Carmenta",
  //   description: "Real-time map overview of emergency vehicles",
  //   href: "/work/carmenta"
  // },
  // {
  //   title: "Forsman & Bodenfors",
  //   description:
  //     "Progressive webapp for IKEA events with offline mode and QR-code scanner",
  //   href: "/work/forsman-bodenfors"
  // },
  // {
  //   title: "Pinchos",
  //   description: "Food ordering and payment app for restaurants",
  //   href: "/work/pinchos"
  // },
  // {
  //   title: "Telenor Connexion",
  //   description:
  //     "IoT dashboard for real-time data and analytics on connected devices",
  //   href: "/work/telenor"
  // }
]
