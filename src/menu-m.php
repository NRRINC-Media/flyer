    <header class="app-bar promote-layer">
      <div class=app-bar-container>
        <button class=menu><img src="/src/css/master/mobile/hamburger.png" alt=Menu></button>
        <h1 class=logo>SITE - MOBILE ONLY</h1>
        <section class=app-bar-actions></section>
      </div>
    </header>
    <nav class="navdrawer-container promote-layer">
      <h4 class="nav-search">
        <div class="wrapper3">
          <form action="#" id="search_form" method="GET">
            <input name="q" autocomplete="off" id="list_search" placeholder="Search.." type="search" required value="<?= @$keyword; ?>" class="search" />
            <button type="submit" class="button4">GO</button>
          </form>
        </div>
      </h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#" target="_blank" rel="noopener">link</a></li>
        <li><a href="#">#</a></li>
        <li><a href="#">#</a></li>
        <li><a href="#">#</a></li>
        <li>
          <div class="dropdown2">
            <button class="dropbtn2" onclick="myFunction6()">stuff<i class="fa fa-caret-down"></i></button>
            <div class="dropdown-content" id="myDropdown">
              <a href="#"> if you scroll</a>
              <a href="#"> to see me</a>
              <a href="#"> you messed up</a>
              <a href="#"> somewhere....</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <script>
      function myFunction6() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn2')) {
          var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }
    </script>
    <style>
      .dropdown {
        float: left;
        overflow: show;
      }

      .dropdown {
        cursor: pointer;
        font-size: 16px;
        border: none;
        outline: none;
        color: #4285f4;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }

      .dropbtn2 {
        cursor: pointer;
        font-size: 16px;
        border: none;
        outline: none;
        color: none;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }

      .navbar a:hover,
      .dropdown:hover .dropbtn,
      .dropbtn:focus {
        background-color: red;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #4285f4;
        min-width: 250px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      transition-timing-function: ease-in-out;
      }

      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }

      .dropdown-content a:hover {
        background-color: #ddd;
      }

      .show {
        display: block;
      transition-timing-function: ease-in-out;
      }

      .input4,
      .button4 {
        background-color: transparent;
        border: 0;
      }

      .button4 {
        position: absolute;
        right: 0;
        top: 0;
        padding-top: 2px;
      }

      .wrapper3 {
        border: 1px solid #000;
        display: inline-block;
        position: relative;
      }
    </style>
    <style>
   .app-bar.darkclass {
        background-color: #353941 !important;
    }

    .search-wrap1.darkclass {
        background-color: #353941 !important;
    }

    .navdrawer-container.darkclass {
        background-color: #173f97 !important;
    }
    .nav-search.darkclass {
        background-color: #4f545e !important;
    }

    </style>