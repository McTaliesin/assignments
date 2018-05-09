const redux = require("redux");

let store = redux.createStore(contactReducer);


function addContact(newContact) {
    return  {
      type: "ADD_CONTACT",
      newContact
    }
}
function removeContact(id) {
    return {
      type: "REMOVE_CONTACT",
      id
    }
}

function contactReducer(prevState = [], action) {
  switch(action.type) {
    case "ADD_CONTACT":
      return [...prevState, action.newContact]
    case "REMOVE_CONTACT":
      const oldArr = [...prevState]
      return oldArr.filter(contact => action.id !== contact.id);
    default:
      return prevState;

  }
}

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addContact({
    id: "a1",
    name: "Tommy Oliver",
    phone: "925-867-5779",
    email: "thepreenranger@powerrangers.com"
}));
store.dispatch(addContact({
    id: "a2",
    name: "John Olivera",
    phone: "925-867-5889",
    email: "thegreenranger@powerrangers.com"
}));
store.dispatch(addContact({
    id: "a3",
    name: "Tomas Bahama",
    phone: "925-867-5999",
    email: "thebreenranger@powerrangers.com"
}));

store.dispatch(removeContact("a2"));
