import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

const mapColor = ({ bg, color }) => `bg-${bg} ${color}`
const List = styled("div")`flex flex-wrap mt4`
const Card = styled("a")`
w-100 w-50-l pa4 link
${mapColor}
`
Card.Title = styled("h3")`f2 mb0 mt0`
Card.Description = styled("p")`f4 lh-copy normal measure`
const URL = styled("div")``

const WorkList = () => (
  <List>
    {works.map((work, i) => (
      <Card key={work.href} {...work} target="_blank">
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
    // href: "/work/swisher",
    href: "https://swisher.carlb.dev"
  },
  {
    title: "b0tt0",
    description:
      "Order food and drinks for pickup with built-in queue management and push notifications to stay updated on order changes",
    // "e-commerce point of sale system for foodtrucks, bars and cafes",
    // href: "#projects",
    bg: "gold",
    color: "black-80",
    href: "https://botto.carlb.dev"
  },
  {
    title: "Pine Valley",
    description: "Pomodoro-style productivity game to help you stay focused",
    href: "#projects",
    bg: "dark-green",
    color: "washed-green",
    url: ""
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
