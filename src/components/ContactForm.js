import React, { useState } from "react"
import styled from "tachyons-components"

const Form = styled("form")``
const Label = styled("label")`
f5 b db mb3 tracked
`
const Input = styled("input")`
f4 input-reset ph2 pv3 mt1 bg-transparent w-100 ba b--black-20
`
const Textarea = styled("textarea")`
f4 input-reset pa2 mt1 bg-transparent w-100 ba b--black-20 sans-serif
`

const Button = styled("button")`
  f5 fw6 ba
  bg-black-80 white w-100
  hover--bg-black-60
  ph4 pv3
  grow no-underline dib
`
const mapColors = ({ type }) => {
  const colorMap = {
    success: [ "dark-green", "bg-washed-green" ],
    error: [ "dark-red", "bg-washed-red" ]
  }
  return (colorMap[type] || []).join(" ")
}
const Alert = styled("div")`
ph4 pv4 br2 dark-green bg-washed-green
${mapColors}
`
Alert.Title = styled("h3")`f3 mt0 mb2`
Alert.Description = styled("p")`f4 ma0`
const SuccessMessage = () => (
  <Alert type="success">
    <Alert.Title>Thanks!</Alert.Title>
    <Alert.Description>
      I have recevied your message and will be in touch shortly.
    </Alert.Description>
  </Alert>
)
const ErrorMessage = () => (
  <Alert type="error">
    <Alert.Title>Oops!</Alert.Title>
    <Alert.Description>
      Something went wrong with sending your message.
    </Alert.Description>
  </Alert>
)
const Loader = () => (
  <div className="tc">
    <pre>...</pre>
  </div>
)
const states = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
}
const statusMap = {
  [states.LOADING]: <Loader />,
  [states.SUCCESS]: <SuccessMessage />,
  [states.FAILURE]: <ErrorMessage />
}
const ContactForm = () => {
  const [ status, setStatus ] = useState(null)
  return status ? (
    statusMap[status]
  ) : (
    <Form
      name="contact"
      method="POST"
      action="/"
      data-netlify
      netlify-honeypot="bot-field"
      onSubmit={e => {
        e.preventDefault()
        const { method, email, message } = e.target
        const form = { email: email.value, message: message.value }
        setStatus(states.LOADING)
        fetch("/", {
          method,
          body: encode({ "form-name": "contact", ...form }),
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
          .then(res => setStatus(res.ok ? states.SUCCESS : states.FAILURE))
          .catch(() => setStatus(states.FAILURE))
      }}
    >
      <input name="bot-field" style={{ visibility: "hidden" }} />
      <input type="hidden" name="form-name" value="contact" />
      <Label>
        Message
        <Textarea
          name="message"
          required
          rows="4"
          placeholder="Enter your message..."
        />
      </Label>
      <Label>
        Email
        <Input
          name="email"
          type="email"
          required
          placeholder="What is your email so I know where to reply?"
        />
      </Label>
      <Button type="submit">Send email</Button>
    </Form>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default ContactForm
