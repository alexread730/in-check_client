import { UPDATE_INTERVAL } from '../actions/actions_interval';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_INTERVAL:
      return [ action.payload.data ];
    default:
      return state;
  }

}
