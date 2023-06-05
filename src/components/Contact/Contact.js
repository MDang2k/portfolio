import React, { useEffect, useRef, useState } from "react"
import "./index.scss"
import Loader from "react-loaders"
import emailjs from "@emailjs/browser"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"

export default function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_x184fm7",
        "template_yslk7y9",
        refForm.current,
        "wV0Y3DxyjnRVDmZ3e"
      )
      .then(
        () => {
          alert("Message successfully sent!")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send the message!")
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Looking for more information or want to contact me for business opportunity? Sumbit your information in this form to send an email to my mail box! I will follow up with you as soon as possible.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
