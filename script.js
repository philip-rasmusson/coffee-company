
const showNavbar = () => {
  const navbar = document.querySelector('#navbar-one-small-screen')
  navbar.className === 'font-white' ? navbar.className += 'hidden' : navbar.className = 'font-white'

  console.log(navbar.className)
}





const navbarMenu = () => {
  return (`

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
// document.querySelector('#navbar-two').innerHTML = navbarMenu()
// document.querySelector('#navbar-three').innerHTML = navbarMenu()

const navbarMenuSmall = () => {
  return (`
      <div class="navbar-menu-small">
        <ul>
          <li><a href="#section-two">ABOUT US</a></li>
          <li><a href="#section-three">FIND WORK</a></li>
          <li><a href="#section-four">GET IN CONTACT</a></li>
          <li><a href="#section-five">ENVIROMENT</a></li>
        </ul>
        </div>
        `)
}

document.querySelector('#navbar-one-small-screen').innerHTML = navbarMenuSmall()
// document.querySelector('#navbar-two-small-screen').innerHTML = navbarMenuSmall()
// document.querySelector('#navbar-three-small-screen').innerHTML = navbarMenuSmall()

// <input placeholder="SEARCH..." />
