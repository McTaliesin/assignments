const redux = require("redux");

const state = {
    counter: 0
}

function increment (){
    return {
      type: "INCREMENT"
    }
}

function set (num){
    return {
        type: "SET",
        num
    }
}

function dubs (){
  return {
    type: "DUBS":

  }
}

function reducer  (prevState = state, action){
  switch(action.type){
    case "INCREMENT":
      return {
        counter: prevState.counter + 1
      }
      case "SET":
        return {
           counter: action.num
        }
      case "DUBS":
          return {
            counter: prevState.counter * 2
          }
    default:
      return prevState
  }
}

const store = createStore(reducer);



store.subscribe(()=> {
    console.log(store.getState())
})
store.dispatch(increment())
store.dispatch(set(3))
store.dispatch()
store.dispatch()
