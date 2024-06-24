const Router = ReactRouterDOM.HashRouter
const { Route, Routes, Navigate } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookDetails } from './pages/BookDetails.jsx'

const { useState } = React

export function App() {
  // const [page, setPage] = useState('bookindex')

  return (
    <Router>
      <section className='app'>
        {/* <AppHeader onSetPage={(page) => setPage(page)} /> */}
        <AppHeader />

        <main className='main-layout'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/BookIndex' element={<BookIndex />} />
            <Route path='/BookIndex/:bookId' element={<BookDetails />} />
            <Route path='/' element={<Navigate to='/BookIndex' />} />
          </Routes>
          {/* {page === 'home' && <Home />}
          {page === 'aboutus' && <AboutUs />}
          {page === 'bookindex' && <BookIndex />} */}
        </main>
      </section>
    </Router>
  )
}
