// const total = 0;
const redux = require('redux');
//A Bare Bones ACTION
// {
//   type: "ACTION_NAME", //type is keyword, "ACTION_NAME" is clownshoes
//   data: yourData       //data is any data, named whatever the data being passed is called i.e. myArr
// }

//example of an ACTION
// {
//   type: "INCREMENT",
//   total
// }



//ACTION CREATORS
//Action creators are functions that return actions and only actions.

//Bare bones of action creator
// function increment() {
//   return ACTION
// }

// example of an action creator returning an ACTION
function increment() {
  return {
    type: "INCREMENT",
  }
}

// function addToDo(todo) {
//   return {
//     type: "ADD_TO_DO",
//     todo
//   }
// }

// The dispatcher sends the actions to the reducer
// store.dispatch(addToDo())

function reducer(prevState={counter: 0}, action){
  switch(action.type){
    case "INCREMENT":
      return {
        counter: prevState.counter + 1
      }
    default:
      return prevState
}
}

const store = redux.createStore(reducer)
store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
