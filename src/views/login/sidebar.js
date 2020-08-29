import React from "react"

const Sidebar = ({toggle, sideBar}) => {
  return (
    <div
      style={{
        display: toggle ? "block" : "none",
      }}
      className="sidebar"
    >
      <div className="side"
      style={{background: 'linear-gradient(to right,#2E3B55,#646464',
      color:"#fff"}}
      >Sidebar Content</div>
    </div>
  )
}

export default Sidebar
