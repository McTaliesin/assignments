import axios from "axios";

const state = {
    favList: []
}

export function addFav(APIId, title) {
    return (dispatch) => {
        axios.post("/coins", { title, APIId }).then(response => {
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

export function removeFav(coinId) {
    return (dispatch) => {
        axios.delete("/coins/" + coinId).then(
            response => {
                dispatch({
                    type: "REMOVE_FAV",
                    coinId
                })
            }
        ).catch(err => {
            console.log(err);
        })
    }
}

export function getFavs() {
    return (dispatch) => {
        axios.get("/coins").then(response => {
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
                        title: action.title,
                        id: action.id
                    }
                ]
            }
        case "REMOVE_FAV":
            const updatedFavList = prevState.favList.filter(coin => {
                return coin.APIId !== action.Id
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
