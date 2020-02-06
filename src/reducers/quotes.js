
export default (state = [], action) => {
  let quote = state.filter(quote => quote.id === action.quoteId)[0]
  let idx = state.indexOf(quote)

  switch(action.type){
    case 'ADD_QUOTE':
    return state.concat(action.quote)

  case 'REMOVE_QUOTE':
    return state.filter(quote => quote.id != action.quoteId)

  case 'UPVOTE_QUOTE':
    quote.votes += 1
    return [...state.slice(0, idx), quote, ...state.slice(idx + 1)]

  case 'DOWNVOTE_QUOTE':
    if (quote.votes > 0){
      quote.votes -= 1
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)]
    }
    return state

  default:
    return state;
  }

}
