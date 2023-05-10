import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import "./index.scss"

import React from "react"

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />

      <div className="page">
        <span className="tags top-tags">&lt;/body&gt</span>

        <Outlet />

        <span className="tags bottom">
          &lt;/body&gt
          <br />
          <span className="bottom-tag-html">&lt;/body&gt</span>
        </span>
      </div>
    </div>
  )
}
