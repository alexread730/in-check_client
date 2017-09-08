
// State arg isn't app state, only state the reducer is responsible for
export default function(state = null, action) {

  switch(action.type) {
    case 'DECK_SELECTED':
      return action.payload;
    default :
      return state;
  }
}
