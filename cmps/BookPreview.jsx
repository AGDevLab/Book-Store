export function BookPreview({ book }) {
  // console.log('bookpreview')

  const { title, authors, thumbnail, listPrice } = book

  return (
    <article className='book-preview'>
      <h2>Title: {title}</h2>
      <img src={thumbnail} alt='' />
      <h4>Authors: {authors}</h4>
      <h4>Price: {listPrice.amount}</h4>
    </article>
  )
}
