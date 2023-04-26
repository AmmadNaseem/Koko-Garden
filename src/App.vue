<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light shadow">
      <div class="container-fluid">
        <router-link  class="navbar-brand" to="/">
          <span class="mx-2 logoTrees"><i class="fas fa-tree"></i></span> Koko
          Garden
        </router-link>
        
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
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/garden">Garden</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq">FAQ</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="my-3">
      <router-view />
    </main>
    <footer class="section" id="footer">
      <div class="overlay footer-overlay"></div>
      <!--Content -->
      <div class="container">
        <div class="row justify-content-start">
          <div class="col-lg-4 col-sm-12">
            <div class="footer-widget">
              <!-- Brand -->
              <router-link class="footer-brand text-white" to="/"> Koko Garden</router-link>
              <p>
                Together we can make difference join the team and help us our goal to
          plant 7,77,777 trees.
              </p>
            </div>
          </div>

          <div class="col-lg-3 ml-lg-auto col-sm-12">
            <div class="footer-widget">
              <h3>Account</h3>
              <!-- Links -->
              <ul class="footer-links">
                <li>
                  <router-link to="/faq">FAQ</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-sm-6">
            <div class="footer-widget">
              <h3>About</h3>
              <!-- Links -->
              <ul class="footer-links">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <router-link to="/garden">Garden</router-link>
                </li>
                <li>
                  <router-link to="/faq">FAQ</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-sm-6">
            <div class="footer-widget">
              <h3>Socials</h3>
              <!-- Links -->
              <ul class="list-unstyled footer-links">
                <li>
                  <a href=""
                    ><i class="fab fa-facebook-f"></i>Facebook</a
                  >
                </li>
                <li>
                  <a href=""
                    ><i class="fab fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href=""
                    ><i class="fab fa-pinterest-p"></i>Pinterest
                  </a>
                </li>
                <li>
                  <a href=""
                    ><i class="fab fa-linkedin"></i>linkedin
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    ><i class="fab fa-youtube"></i>YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- / .row -->

        <div class="row text-right pt-5">
          <div class="col-lg-12">
            <div class="overflow-hidden">
              <!-- Copyright -->
              <p class="footer-copy">
                Copyright &copy;2023 . Designed &amp; Developed by
                <router-link class="current-year" to="/faq">Koko-Garden</router-link>
              </p>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*----------------------
 FOOTER
-----------------------*/
#footer {
  padding: 80px 0px;
  position: relative;
}
#footer .footer-brand {
  font-size: 30px;
}
#footer .footer-links {
  padding-left: 0;
  list-style-type: none;
}

#footer {
  background: #111;
  background-size: cover;
}

.footer-overlay {
  background: #111;
  opacity: 0.94;
}

.footer-widget p {
  color: #888;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 32px;
  font-size: 14px;
}
.footer-widget h3 {
  color: #fff;
  margin-bottom: 30px;
}

.footer-links a {
  color: #888;
  line-height: 38px;
  font-size: 14px;
  text-transform: capitalize;
}
.footer-links i {
  width: 25px;
}

.footer-copy {
  color: #888;
  font-size: 16px;
  position: relative;
  margin-bottom: 0;
  display: inline-block;
}
.footer-copy:before {
  position: absolute;
  content: "";
  right: calc(100% + 30px);
  top: 16px;
  width: 2000%;
  height: 1px;
  height: 1px;
  background: #94959a;
}

.current-year {
  color: #21c87a !important;
}

/*-----------------------------
 SCROLL TO TOP
--------------------------------*/
.scroll-to-top {
  position: fixed;
  content: "";
  right: 30px;
  bottom: 50px;
  z-index: 999;
  background: #21c87a;
  color: #fff !important;
  border-radius: 100%;
  opacity: 0;
}
.scroll-to-top i {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  text-align: center;
  font-size: 22px;
  line-height: 50px;
  display: block;
  box-shadow: 0 7px 22px rgba(0, 0, 0, 0.08);
}

.scroll-to-top:hover,
.scroll-to-top:focus {
  text-decoration: none;
}

.reveal {
  transition: all 0.3s;
  cursor: pointer;
  opacity: 1;
}

nav {
  padding: 30px;
  box-shadow: 2px #2c3e50;
  .navbar {
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 1px 1px 3px 0 gray;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .navbar-nav {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-item {
    margin-left: 1rem;
  }

  .nav-item a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  .nav-item a:hover {
    color: #42b983;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 3px 3px 0;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .logoTrees {
    color: #42b983;
  }
}
</style>
