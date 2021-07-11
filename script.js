
const navbarMenu = () => {
  return (`
  <h1 id="title"><a href="#section-one">COFFEE COMPANY</a></h1>
      <div class="navbar-menu">
        <ul>
        <li><a href="#section-two">ABOUT US</a></li>
          <li><a href="#section-three">FIND WORK</a></li>
          <li><a href="#section-four">GET IN CONTACT</a></li>
          <li><a href="#section-five">ENVIROMENT</a></li>
        </ul>
        </div>
        `)
}

document.querySelector('#navbar-one').innerHTML = navbarMenu()
document.querySelector('#navbar-two').innerHTML = navbarMenu()
document.querySelector('#navbar-three').innerHTML = navbarMenu()

     // <input placeholder="SEARCH..." />