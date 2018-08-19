// a reducer takes 2 things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('incrementing likes!');
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1), // after the one we are updating
      ];
      // return the updated state
    default:
      return state;
  }
}

/*
function addLike(picture) {
  // take a copy next 2 lines do same thing
  var pic = {...picture};
  var pic = Object.assign({}, picture);
  pic.likes++;
  console.log(pic);
  return pic;
}
*/

export default posts;
