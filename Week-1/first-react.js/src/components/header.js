function Navbar(){
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
        <div class="container-fluid d-flex justify-content-between">
          <a class="navbar-brand text-white fs-4 ms-5" href="#">LOGO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active text-white fs-4" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white ms-4 fs-4" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white me-5 ms-4 fs-4" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
     </nav>
      )
  }
  export default Navbar;