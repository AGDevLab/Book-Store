export function BookPreview({ book }) {
  // console.log('bookpreview')

  const { title, authors, thumbnail, listPrice } = book

  const displayThumbnail = thumbnail || './assets/img/returnnull.jpg'

  return (
    <article className='book-preview'>
      <h2>Title: {title}</h2>
      <img src={displayThumbnail} alt='' />
      {authors && <h4>Authors: {authors}</h4>}
      {listPrice && <h4>Price: {listPrice.amount}</h4>}
    </article>
  )
}

// thumbnail: './assets/img/20.jpg'
