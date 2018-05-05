import axios from "axios";

const state = {
    favList: []
}

export function addFav(APIId, title) {
    return (dispatch) => {
        axios.post("/books", { title, APIId }).then(response => {
            dispatch({
                type: "ADD_FAV",
                title,
                APIId,
                id: response.data._id
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export function removeFav(bookId) {
    return (dispatch) => {
        axios.delete("/books/" + bookId).then(
            response => {
                dispatch({
                    type: "REMOVE_FAV",
                    bookId
                })
            }
        ).catch(err => {
            console.log(err);
        })
    }
}

export function getFavs() {
    return (dispatch) => {
        axios.get("/books").then(response => {
            dispatch({
                type: "GET_FAVS",
                favorites: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export default function reducer(prevState = state, action) {
    switch(action.type) {
        case "ADD_FAV":
            return {
                favList: [...prevState.favList,
                    {
                        title: action.name,
                        id: action.id
                    }
                ]
            }
        case "REMOVE_FAV":
            const updatedFavList = prevState.favList.filter(book => {
                return book.APIId !== action.bookId
            })
            return {
                favList: updatedFavList
            }
        case "GET_FAVS":
            return {
                favList: action.favorites
            }
        default:
            return prevState
    }
}
