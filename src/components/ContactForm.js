import React from "react"
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
const ContactForm = () => (
  <Form
    onSubmit={e => {
      e.preventDefault()
      alert("not implemented")
    }}
  >
    <Label>
      Message
      <Textarea required rows="4" placeholder="Enter your message..." />
    </Label>
    <Label>
      Email
      <Input
        type="email"
        required
        placeholder="What is your email so I know where to reply?"
      />
    </Label>
    <Button type="submit">Send email</Button>
  </Form>
)
export default ContactForm
