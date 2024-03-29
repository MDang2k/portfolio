import React, { useEffect, useState } from "react"
import "./index.scss"
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import Logo from "./Logo/Logo"
import Loader from "react-loaders"

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["M", "i", "n", "h", " ", "Đ", "ă", "n", "g"]
  const jobArray = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover")
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / Javascript Programmer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
