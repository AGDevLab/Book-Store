import { Home } from './pages/Home.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

const { useState } = React

export function App() {
  const [page, setPage] = useState('bookindex')

  return (
    <section className='app'>
      <header className='app-header'>{/* <h1>My App</h1> */}</header>
      <section className='app-header full main-layout'>
        <h1>Book Store</h1>
        <nav className='app-nav'>
          <a onClick={() => setPage('home')} href='#'>
            Home
          </a>
          <a onClick={() => setPage('aboutus')} href='#'>
            AboutUs
          </a>
          <a onClick={() => setPage('bookindex')} href='#'>
            BookGallery
          </a>
        </nav>
      </section>
      <main className='main-layout'>
        {page === 'home' && <Home />}
        {page === 'aboutus' && <AboutUs />}
        {page === 'bookindex' && <BookIndex />}
      </main>
    </section>
  )
}
