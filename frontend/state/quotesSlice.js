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
    createQuote: {
      prepare({ authorName, quoteText }) {
        const newQuote = {
          id: getNextId(),
          quoteText,
          authorName,
          apocryphal: false,
        } 
        return { payload: newQuote };
      },
      reducer(state, action) {
        state.list.push(action.payload);
      },
    },
    deleteQuote(state, action) {
      const id = action.payload;
      state.list = state.list.filter(qt => qt.id !== id);
    },
    markFake(state, action) {
      const id = action.payload;
      const target = state.list.find(qt => qt.id === id);
      target.apocryphal = !target.apocryphal;
    },
    setHighlighted(state, action) {
      const id = action.payload;
      const highlighted = state.highlightedQuote;
      state.highlightedQuote = id === highlighted
        ? null
        : id;
    },
    showAll(state) {
      state.displayAllQuotes = !state.displayAllQuotes;
    },
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
