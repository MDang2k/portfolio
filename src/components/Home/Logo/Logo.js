import LogoS from "../../../assets/images/app_dev_logo.svg"
import React from "react"
import "./index.scss"

export default function Logo() {
  return (
    <div className="logo-container fade-in">
      <img className="solid-logo" src={LogoS} alt="homepage logo" />
    </div>
  )
}
