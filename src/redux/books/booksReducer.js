import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as booksActions from './booksAction';
import { fetchBooks } from './booksOperations';

const entities = createReducer([], {
  [fetchBooks.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [booksActions.fetchBooksRequest]: () => true,
  [booksActions.fetchBooksSuccess]: () => false,
  [booksActions.fetchBooksError]: () => false,
});
const error = createReducer(null, {
  [booksActions.fetchBooksError]: (_, action) => action.payload,
  [booksActions.fetchBooksRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
