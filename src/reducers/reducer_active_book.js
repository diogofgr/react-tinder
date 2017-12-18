// state argument is not App state,
// only the statethis reducer is responsible for.
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
