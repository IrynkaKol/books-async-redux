import * as booksActions from './booksAction'
import * as booksShelAPI from '../../services/bookshelf-api'

export const fetchBooks = () => async dispatch => {
    dispatch(booksActions.fetchBooksRequest())
    try {
        const books = await booksShelAPI.fetchBooks() // будуть вже книжки у списку
        dispatch(booksActions.fetchBooksSuccess(books)) // якщо запит успішний
    } catch (error) {
        dispatch(booksActions.fetchBooksError(error))
    }

    
} 