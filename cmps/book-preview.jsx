export function BookPreview({ book }) {
    const isCheap = (book.listPrice.amount <= 40) ? 'cheap' : ''
    const isExpensive = (book.listPrice.amount >= 100) ? 'expensive' : ''
    
    return (
        <article className="book-preview">
            <h2>Book title: {book.title}</h2>
            <h3>Author\s: {book.authors}</h3>
            <h4 className={`${isCheap} ${isExpensive}`}>Book price: <span className="price">{`${book.listPrice.amount}${book.listPrice.currencyCode}`}</span></h4>
            <img src={book.thumbnail} alt=""/>
        </article>
    )
}

