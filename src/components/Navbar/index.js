import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://admin.vipusknik.kz/storage/300/1493040988-logopng.png" width="130px"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <NavLink to="/"class="nav-link active" href="#" activeStyle>Home
            <span class="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/trello" class="nav-link" href="#" activeStyle>Trello</NavLink>
        </li>
        <li class="nav-item">
            <NavLink to="/attendance" class="nav-link" href="#" activeStyle>Attendance</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/achievments" class="nav-link" href="#" activeStyle>Achievments</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/profile" class="nav-link" href="#" activeStyle>Profile</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};
  
export default Navbar;