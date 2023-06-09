import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)


    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }
    
    const { txt, maxPrice, maxPageCount } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Title:</label>
                <input value={txt} onChange={handleChange} type="text" name="txt" id="txt"  placeholder="By Title" />

                <label htmlFor="maxPrice">Max price:</label>
                <input value={maxPrice} onChange={handleChange} type="number" name="maxPrice" id="maxPrice" placeholder="By Max Price" />

                <label htmlFor="maxPageCount">Max pages:</label>
                <input value={maxPageCount} onChange={handleChange} type="number" name="maxPageCount" id="maxPageCount" placeholder="By Max Pages" />

                <button>Filter Books</button>
            </form>

        </section>
    )
}