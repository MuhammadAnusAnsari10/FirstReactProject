export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand  text-light" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item pe-3 ">
                <a class="nav-link text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item pe-3">
                <a class="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li class="nav-item pe-3">
                <a class="nav-link text-light" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item pe-3">
                <a class="nav-link text-light" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item pe-3">
                <a class="nav-link text-light" href="#">
                  F.A.Q's
                </a>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <button class="btn btn-outline-success me-3" type="submit">
                Log in
              </button>
              <button class="btn btn-outline-success" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
