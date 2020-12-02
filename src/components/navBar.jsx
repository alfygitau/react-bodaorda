import React from 'react'

const NavBar = () => {
    return (
        <div>
           <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="boda.jpeg" width="50" height="50" class="d-inline-block align-center" alt="" loading="lazy"/>
          BODABODA
        </a>
        <ul class="nav nav-pills nav2 mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-About Us-tab" data-toggle="pill" href="#pills-About Us" role="tab" aria-controls="pills-About Us" aria-selected="false">About Us</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-Why Boda Orda-tab" data-toggle="pill" href="#pills-Why Boda Orda" role="tab" aria-controls="pills-Why Boda Orda" aria-selected="false">Why Boda Order?</a>
          </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-login-tab" data-toggle="pill" href="./fom.html" role="tab" aria-controls="pills-login" aria-selected="false">Login</a>
        </li>
      </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"></div>
          <div class="tab-pane fade" id="pills-About Us" role="tabpanel" aria-labelledby="pills-About Us-tab"></div>
          <div class="tab-pane fade" id="pills-Why Boda Orda" role="tabpanel" aria-labelledby="pills-Why Boda Orda-tab"></div>
          <div class="tab-pane fade" id="pills-Contact" role="tabpanel" aria-labelledby="pills-Contact-tab"></div>
          <div class="tab-pane fade" id="pills-Login" role="tabpanel" aria-labelledby="pills-Login-tab"></div>
        </div>
      </nav> 
        </div>
    )
}

export default NavBar
