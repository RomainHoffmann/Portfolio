import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import emailjs from "@emailjs/browser"
import { theme } from "../../theme"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    width: 100%;
    max-width: 600px;

    label {
      font-size: 1.2rem;
      font-weight: 600;
    }

    input,
    textarea {
      padding: 0.5rem;
      font-size: 1.2rem;
      border: none;
      border-bottom: 3px solid ${theme.colors.primary};
      width: 100%;
      font-family: inherit;
      background-color: ${theme.colors.outline};
    }

    p {
      color: red;
    }
  }
`

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: any) => {
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          name="name"
          id="name"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
          })}
          type="email"
          name="email"
          id="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          placeholder="Subject"
          {...register("subject", {
            required: "Subject is required",
          })}
          type="text"
          name="subject"
          id="subject"
        />
        {errors.subject && <p>{errors.subject.message}</p>}
      </div>
      <div>
        <textarea
          placeholder="Message"
          {...register("message", {
            required: "Message is required",
          })}
          style={{ resize: "none" }}
          name="message"
          id="message"
          rows={15}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <SubmitButton type="submit">Send</SubmitButton>
    </FormContainer>
  )
}

export default ContactForm
