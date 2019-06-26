// a reducer takes in two things

// 1 the action (info about what happened)
// 2 copy of the current state

function posts(state =[], action){
    switch(action.type){
        case 'INCREMENT_LIKES':
        const i = action.index;
        return [
            ...state.slice(0,i), //before index we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1) //after index we are updating
        ]
     default: 
     return state;
    }
    
  }
  export default posts