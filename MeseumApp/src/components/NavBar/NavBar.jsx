import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className='logo'>museum</div>
        <input type="search" name="input-search" id="input-search" />
        <div className='nav-links'>
            <a href='#'>Home</a>
            <a href='#'>Search</a>
            <a href='#'>Contact</a>
        </div>
      
    </div>
  )
}

export default NavBar

