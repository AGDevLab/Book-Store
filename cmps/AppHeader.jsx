const { Link, NavLink } = ReactRouterDOM

export function AppHeader({ onSetPage }) {
  return (
    <React-Fragment>
      <header className='app-header full main-layout'>
        {/* <h1>My App</h1> */}
      </header>
      <section className='app-header full main-layout'>
        <h1>Book Store</h1>
        <nav className='app-nav'>
          <NavLink to='/home'>Home </NavLink>
          <NavLink to='/aboutus'>About Us </NavLink>
          <NavLink to='/bookIndex'>BookGallery </NavLink>
          {/* <a onClick={() => onSetPage('home')} href='#'>
            Home
          </a>
          <a onClick={() => onSetPage('aboutus')} href='#'>
            AboutUs
          </a>
          <a onClick={() => onSetPage('bookindex')} href='#'>
            BookGallery
          </a> */}
        </nav>
      </section>
    </React-Fragment>
  )
}
