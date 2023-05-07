import { LongTxt } from "../cmps/long-txt.jsx"

export function BookDetails({ book, onBack }) {
    const isCheap = (book.listPrice.amount <= 40) ? 'cheap' : ''
    const isExpensive = (book.listPrice.amount >= 100) ? 'expensive' : ''
    const isOnSale = book.listPrice.isOnSale ? 'ON SALE!' : ''

    const currentYear = new Date().getFullYear()
    const isVintage = (book.publishedDate + 10 <= currentYear) ? 'vintage!' : ''
    const isNew = (book.publishedDate + 1 >= currentYear) ? 'new!' : ''

    const bookDifficulty = _getBookDifficulty(book.pageCount)

    return (
        <section className="book-details">
            <h2>title: {book.title}</h2>
            <h3>authors: {book.authors[0]}</h3>
            <h4>subtitle: {book.subtitle}</h4>
            <h4>Date Published: {`${book.publishedDate} ${isVintage}${isNew}`}</h4>
            <h4>Difficulty: {bookDifficulty}</h4>
            <h4 className={`${isCheap} ${isExpensive}`}>price: <span className="price">{`${book.listPrice.amount}${book.listPrice.currencyCode} ${isOnSale}`}</span></h4>
            <LongTxt txt={`Description: ${book.description}`} length={100}></LongTxt>
            <img src={book.thumbnail} alt={book.thumbnail} />
            <button onClick={onBack}>Back</button>
        </section>
    )
}

function _getBookDifficulty(pageCount) {
    if(pageCount > 500) return 'Serious reading'
    if(pageCount > 200) return 'Descent reading'
    return 'Light reading'
}