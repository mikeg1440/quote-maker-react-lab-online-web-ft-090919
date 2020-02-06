
export const addQuote = (newQuote) => {
  return {
    type: 'ADD_QUOTE',
    quote: {...newQuote, votes: 0}
  }
}

export const removeQuote = (id) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId: id
  }
}

export const upvoteQuote = (id) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: id
  }
}

export const downvoteQuote = (id) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: id
  }
}
