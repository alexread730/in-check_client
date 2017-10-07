import { FETCH_DECKS } from '../actions/index';
import { DELETE_DECK, CREATE_DECK } from '../actions/actions_interval';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DECKS:
      return [ action.payload.data ];
    case CREATE_DECK:
      let newDeck = {
        name: action.payload.name,
        description: action.payload.description,
        active: action.payload.active,
        category: action.payload.category,
        creator_id: localStorage.UserID
    }
      return [ ...state, newDeck ]
    case DELETE_DECK:
      return [ action.payload.data ]
    default:
      return state;
  }

}
