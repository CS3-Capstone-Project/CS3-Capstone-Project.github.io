import React from "react"

const Navigation = ({sideBar}) => {
  return (
    <nav className="nav">
      <button onClick={() => sideBar()}>show Side Bar</button>
    </nav>
  )
}

export default Navigation
