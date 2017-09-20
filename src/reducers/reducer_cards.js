import { FETCH_ONE_DECK } from '../actions/index';
import { DELETE_CARD } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ONE_DECK:
      return [ action.payload.data ];
    case DELETE_CARD:
      // let cardToDelete = state[0].find(card => {
      //   return (card.id == action.payload.data.card);
      // });
      //
      // let index = state[0].indexOf(cardToDelete);
      console.log(action.payload.data.card);
      let newState = [state[0].filter(card => {
        return (card.id != action.payload.data.card);
      })]

      return newState;
    default:
      return state;
  }

}
