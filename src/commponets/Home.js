import React from "react";

export default function Home() {
  return (
    <>
      <nav class="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img class="logo" src="img/logo-dark.svg" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <button class="btn btn-primary ms-lg-3">Join Us</button>
          </div>
        </div>
      </nav>

      <div class="hero vh-100 d-flex align-items-center" id="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mx-auto text-center">
              <h1 class="display-4 text-white">
                Build robust landing pages now
              </h1>
              <p class="text-white my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                quia sequi eius. Quas, totam aliquid. Repudiandae reiciendis vel
                excepturi ipsa voluptate dicta!
              </p>
              <a href="#" class="btn me-2 btn-primary">
                Get Started
              </a>
              <a href="#" class="btn btn-outline-light">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="services">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">SERIVCES</h6>
              <h1>Our Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
              </p>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect bounceInUp">
                <div class="iconbox">
                  <i class="bx bxs-check-shield"></i>
                </div>
                <h5 class="mt-4 mb-2">Service</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  perspiciatis illo asperiores perferendis{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  <i class="bx bxs-comment-detail"></i>
                </div>
                <h5 class="mt-4 mb-2">Service</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  perspiciatis illo asperiores perferendis{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  <i class="bx bxs-cog"></i>
                </div>
                <h5 class="mt-4 mb-2">Service</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  perspiciatis illo asperiores perferendis{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  <i class="bx bxs-heart"></i>
                </div>
                <h5 class="mt-4 mb-2">Service</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  perspiciatis illo asperiores perferendis{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  <i class="bx bxs-rocket"></i>
                </div>
                <h5 class="mt-4 mb-2">Service</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  perspiciatis illo asperiores perferendis{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  <i class="bx bxs-doughnut-chart"></i>
                </div>
                <h5 class="mt-4 mb-2">Service</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  perspiciatis illo asperiores perferendis{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="row w-100 py-0 bg-light" id="features">
        <div class="col-lg-6 col-img"></div>
        <div class="col-lg-6 py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <h6 class="text-primary">WHY TO CHOOES US</h6>
                <h1>Best solution for your business</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                  repellat distinctio eveniet eaque fuga in cumque optio
                  consectetur harum vitae debitis sapiente praesentium aperiam
                  aut
                </p>

                <div class="feature d-flex mt-5">
                  <div class="iconbox me-3">
                    <i class="bx bxs-comment-edit"></i>
                  </div>
                  <div>
                    <h5>Feature</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil perspiciatis illo{" "}
                    </p>
                  </div>
                </div>
                <div class="feature d-flex">
                  <div class="iconbox me-3">
                    <i class="bx bxs-user-circle"></i>
                  </div>
                  <div>
                    <h5>Feature</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil perspiciatis illo{" "}
                    </p>
                  </div>
                </div>
                <div class="feature d-flex">
                  <div class="iconbox me-3">
                    <i class="bx bxs-download"></i>
                  </div>
                  <div>
                    <h5>Feature</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil perspiciatis illo{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div class="container-fluid">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">PROJECTS</h6>
              <h1>Our Recent Work</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
              </p>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-lg-4 col-sm-6">
              <div class="project">
                <img src="img/pro1.jpg" alt="" />
                <div class="overlay">
                  <div>
                    <h4 class="text-white">Project Title</h4>
                    <h6 class="text-white">Website Design</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="project">
                <img src="img/pro2.jpg" alt="" />
                <div class="overlay">
                  <div>
                    <h4 class="text-white">Project Title</h4>
                    <h6 class="text-white">Website Design</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="project">
                <img src="img/pro3.jpg" alt="" />
                <div class="overlay">
                  <div>
                    <h4 class="text-white">Project Title</h4>
                    <h6 class="text-white">Website Design</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="project">
                <img src="img/pro4.jpg" alt="" />
                <div class="overlay">
                  <div>
                    <h4 class="text-white">Project Title</h4>
                    <h6 class="text-white">Website Design</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="project">
                <img src="img/pro5.jpg" alt="" />
                <div class="overlay">
                  <div>
                    <h4 class="text-white">Project Title</h4>
                    <h6 class="text-white">Website Design</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="project">
                <img src="img/pro6.jpg" alt="" />
                <div class="overlay">
                  <div>
                    <h4 class="text-white">Project Title</h4>
                    <h6 class="text-white">Website Design</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="bg-light">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">PRICING</h6>
              <h1>Our Fair & Simple Pricing</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
              </p>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-sm-6">
              <div class="pricing card-effect text-center">
                <h6>STARTER</h6>
                <h1>$99</h1>
                <hr />
                <ul class="list-unstyled mb-4">
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    Premium support
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    30+ Webmaster Tools
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    Drag & Drop Builder
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    eCommerce Store
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>Wordpress plugins
                  </li>
                </ul>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="pricing card-effect text-center">
                <h6>STARTER</h6>
                <h1>$199</h1>
                <hr />
                <ul class="list-unstyled mb-4">
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    Premium support
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    30+ Webmaster Tools
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    Drag & Drop Builder
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    eCommerce Store
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>Wordpress plugins
                  </li>
                </ul>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="pricing card-effect text-center">
                <h6>STARTER</h6>
                <h1>$299</h1>
                <hr />
                <ul class="list-unstyled mb-4">
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    Premium support
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    30+ Webmaster Tools
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    Drag & Drop Builder
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    eCommerce Store
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>Wordpress plugins
                  </li>
                </ul>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="pricing card-effect text-center">
                <h6>STARTER</h6>
                <h1>$399</h1>
                <hr />
                <ul class="list-unstyled mb-4">
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    Premium support
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    30+ Webmaster Tools
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    Drag & Drop Builder
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>
                    eCommerce Store
                  </li>
                  <li>
                    <i class="bx bxs-check-circle"></i>Wordpress plugins
                  </li>
                </ul>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">TEAM</h6>
              <h1>Meet Our Crew Members</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
              </p>
            </div>
          </div>
          <div class="row text-center g-4">
            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src="img/team1.jpg" alt="" />
                <h5 class="mb-0 mt-4">Sharbat Khan</h5>
                <p>Web Developer</p>
                <div class="social-icons">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src="img/team2.jpg" alt="" />
                <h5 class="mb-0 mt-4">Sharbat Khan</h5>
                <p>Web Developer</p>
                <div class="social-icons">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src="img/team3.jpg" alt="" />
                <h5 class="mb-0 mt-4">Sharbat Khan</h5>
                <p>Web Developer</p>
                <div class="social-icons">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src="img/team4.jpg" alt="" />
                <h5 class="mb-0 mt-4">Sharbat Khan</h5>
                <p>Web Developer</p>
                <div class="social-icons">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" class="bg-light">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">BLOG</h6>
              <h1>Latest News From The Blog</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
              </p>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="blog-post card-effect">
                <img src="img/blog1.jpg" alt="" />
                <h5 class="mt-4">
                  <a href="#">
                    harum vitae debitis sapiente praesentium aperiam au
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                  repellat distinctio eveniet{" "}
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="blog-post card-effect">
                <img src="img/blog2.jpg" alt="" />
                <h5 class="mt-4">
                  <a href="#">
                    harum vitae debitis sapiente praesentium aperiam au
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                  repellat distinctio eveniet{" "}
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="blog-post card-effect">
                <img src="img/blog3.jpg" alt="" />
                <h5 class="mt-4">
                  <a href="#">
                    harum vitae debitis sapiente praesentium aperiam au
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                  repellat distinctio eveniet{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">CONTACT</h6>
              <h1>Get In Touch</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
              </p>
            </div>
          </div>

          <form action="" class="row g-3 justify-content-center">
            <div class="col-md-5">
              <input type="text" class="form-control" placeholder="Full Name" />
            </div>
            <div class="col-md-5">
              <input
                type="text"
                class="form-control"
                placeholder="Enter E-mail"
              />
            </div>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Subject"
              />
            </div>
            <div class="col-md-10">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                class="form-control"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <div class="col-md-10 d-grid">
              <button class="btn btn-primary">Contact</button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-4">
                <img class="logo" src="img/logo-white.svg" alt="" />
              </div>
              <div class="col-lg-2">
                <h5 class="text-white">Brand</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2">
                <h5 class="text-white">More</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                  <li>
                    <a href="#">Privacy & Policy</a>
                  </li>
                  <li>
                    <a href="#">Warranty</a>
                  </li>
                  <li>
                    <a href="#">Shipment</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4">
                <h5 class="text-white">Contact</h5>
                <ul class="list-unstyled">
                  <li>Address: 2715 Ash Dr. San Jose, South Dakota 83475</li>
                  <li>Email: jackson.graham@example.com</li>
                  <li>Phone: (603) 555-0123</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p class="mb-0">
                  © 2020 copyright all right reserved | Designed with{" "}
                  <i class="bx bx-heart text-danger"></i> by
                  <a
                    href="https://www.youtube.com/channel/UCYMEEnLzGGGIpQQ3Nu_sBsQ"
                    class="text-white"
                  >
                    SA7MAN
                  </a>
                </p>
              </div>
              <div class="col-md-6">
                <div class="social-icons">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
