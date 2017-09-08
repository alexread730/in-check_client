export function selectDeck(deck) {
  // selectDeck is an action creator, needs to return action (object w/ 'type' property) AKA type and payload
  return {
    type: 'DECK_SELECTED',
    payload: deck
  }
}
