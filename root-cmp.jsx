const { useState } = React

import { About } from "./views/about.jsx";
import { BookIndex } from "./views/book-index.jsx";
import { HomePage } from "./views/home-page.jsx";

export function App() {

    const [page, setPage] = useState('book')


    function handlePageChange(page) {
        setPage(page)
    }


    return (
        <section className="app main-layout">
            <header className="app-header full main-layout">
                <h1>Miss Books</h1>
                <nav className="app-nav">
                    <a onClick={() => handlePageChange('home-page')} href="#">Home</a> |
                    <a onClick={() => handlePageChange('book')} href="#">Books</a> |
                    <a onClick={() => handlePageChange('about')} href="#">About</a>
                </nav>
            </header>
            <main>
                {page === 'home-page' && <HomePage />}
                {page === 'about' && <About />}
                {page === 'book' && <BookIndex />}
            </main>
        </section>
    )
} 