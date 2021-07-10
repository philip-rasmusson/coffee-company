
const navbarMenu = () => {
  return (`
  <h1>COFFEE COMPANY</h1>
      <div class="navbar-menu">
        <ul>
          <li>ABOUT US</li>
          <span> | </span>
          <li>FIND WORK</li>
          <span> | </span>
          <li>GET IN CONTACT</li>
          <span> | </span>
          <li>ENVIROMENT</li>
        </ul>
        <input placeholder="SEARCH..." />
      </div>
      `)
}

document.getElementById('navbar').innerHTML = navbarMenu()
