import React from "react";

function Sidebar() {
  return (
    <div style={{width:"250px"}} className="h-100">
      <div class="list-group rounded-0">
        <a
          href="#"
          class="list-group-item list-group-item-action active border-0 d-flex align-items-center"
        >
          <span class="bi bi-border-all"></span>
          <span class="ml-2">Dashboard</span>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action border-0 align-items-center"
        >
          <span class="bi bi-box"></span>
          <span class="ml-2">Premium sheet</span>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action border-0 align-items-center"
        >
          <span class="bi bi-box"></span>
          <span class="ml-2">claim</span>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action border-0 align-items-center"
        >
          <span class="bi bi-box"></span>
          <span class="ml-2">balance sheet</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
