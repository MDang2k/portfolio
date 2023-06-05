import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import "./index.scss"

import React from "react"

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />

      <div className="page">
        <span className="tags top-tags"></span>

        <Outlet />

        <span className="tags bottom">
          <br />
          <span className="bottom-tag-html"></span>
        </span>
      </div>
    </div>
  )
}
