import { createSlice } from "@reduxjs/toolkit";

let id = 1
const getNextId = () => id++

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    displayAllQuotes: true,
    highlightedQuote: null,
    list: [
      {
        id: getNextId(),
        quoteText: "Don't cry because it's over, smile because it happened.",
        authorName: "Dr. Seuss",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "So many books, so little time.",
        authorName: "Frank Zappa",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "Be yourself; everyone else is already taken.",
        authorName: "Oscar Wilde",
        apocryphal: false,
      },
    ],
  },
  reducers: {
    deleteQuote(state, action) { },
    createQuote(state, action) { },
    markFake(state, action) { },
    setHighlighted(state, action) { },
    showAll(state) { },
  },
});

export default quotesSlice.reducer;

export const {
  deleteQuote,
  createQuote,
  markFake,
  setHighlighted,
  showAll,
} = quotesSlice.actions;
