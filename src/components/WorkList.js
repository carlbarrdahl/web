import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

const mapColor = ({ bg, color }) => `bg-${bg} ${color}`
const List = styled("div")`flex flex-wrap mt4`
const Card = styled(Link)`
w-100 w-50-l pa4 link
${mapColor}
`
Card.Title = styled("h3")`f2 mb0 mt0`
Card.Description = styled("p")`f4 lh-copy normal measure`
const URL = styled("div")``

const WorkList = () => (
  <List>
    {works.map((work, i) => (
      <Card to={work.href} key={work.href} {...work}>
        <Card.Title>{work.title}</Card.Title>
        <Card.Description>{work.description}</Card.Description>
      </Card>
    ))}
  </List>
)

const works = [
  {
    title: "Swisher",
    description:
      "Linkable payments with encrypted details to protect your number and payment information",
    // "Share your Swish payments with number and payment data encrypted",
    bg: "near-white",
    color: "dark-gray",
    href: "/work/swisher",
    url: "https://swisher-app.firebaseapp.com"
  },
  {
    title: "b0tt0",
    description:
      "Order food and drinks for pickup with built-in queue management and push notifications to stay updated on order changes",
    // "e-commerce point of sale system for foodtrucks, bars and cafes",
    href: "#projects",
    bg: "gold",
    color: "black-80",
    url: "https://swisher-app.firebaseapp.com"
  },
  {
    title: "Pine Valley",
    description: "Pomodoro-style productivity game to help you stay focused",
    href: "#projects",
    bg: "dark-green",
    color: "washed-green",
    url: "https://pakt-dev.firebaseapp.com"
  },
  {
    title: "Pakt",
    description:
      "Create and share challenges with your friends to increase accountability",
    // description: "Invite your friends to challenges and compete for rewards",
    href: "#projects",
    bg: "navy",
    color: "lightest-blue",
    url: "https://pakt-dev.firebaseapp.com"
  }
]

export default WorkList
