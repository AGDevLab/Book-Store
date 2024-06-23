export function BookPreview({ book }) {
  // console.log('bookpreview')

  const { title, authors, thumbnail, listPrice } = book

  return (
    <article className='book-preview'>
      <img src={thumbnail} alt='' />
      <h2>Title: {title}</h2>
      <h4>Authors: {authors}</h4>
      <h4>Price: {listPrice.amount}</h4>
    </article>
  )
}
