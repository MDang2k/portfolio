import LogoS from "../../../assets/images/app_dev_logo.svg"
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap-trial"
import "./index.scss"

export default function Logo() {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 4,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="homepage logo" />
    </div>
  )
}
