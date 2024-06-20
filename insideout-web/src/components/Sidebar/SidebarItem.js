/* eslint-disable react/prop-types */
// src/components/SidebarItem.js
import React from "react";

function SidebarItem({ href, icon, text }) {
  return (
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href={href}
        data-toggle="collapse"
        aria-expanded="true"
      >
        <i className={`fas ${icon}`} />
        <span>{text}</span>
      </a>
    </li>
  );
}

export default SidebarItem;
