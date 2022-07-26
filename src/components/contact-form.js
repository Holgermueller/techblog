import * as React from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xknydakw")

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (
    <form onSubmit={handleSubmit} action="https://formspree.io/f/xknydakw">
      <label htmlFor="name">Name</label>
      <input
        style={{
          width: `100%`,
          height: `50px`,
          border: `1px solid darkgray`,
          borderRadius: `15px`,
          margin: `8px auto`,
          paddingLeft: `8px`,
          zIndex: `1`,
        }}
        id="name"
        type="name"
        name="name"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="email">Email Address</label>
      <input
        style={{
          width: `100%`,
          height: `50px`,
          border: `1px solid darkgray`,
          borderRadius: `15px`,
          margin: `8px auto`,
          paddingLeft: `8px`,
          zIndex: `1`,
        }}
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea
        style={{
          width: `100%`,
          height: `300px`,
          margin: `8px auto`,
          border: `1px solid darkgray`,
          borderRadius: `15px`,
          padding: `4px`,
        }}
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        style={{
          width: `100%`,
          height: `50px`,
          margin: `8px auto`,
          color: ` #f7f9fb`,
          fontSize: `1rem`,
          fontWeight: `bold`,
          borderRadius: `15px`,
          backgroundColor: `#31708e`,
        }}
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  )
}
