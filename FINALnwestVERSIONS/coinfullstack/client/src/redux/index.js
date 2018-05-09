import axios from "axios";

const state = {
    prevList: []
}

export function addPrev(APIId, name) {
    return (dispatch) => {
        axios.post("/coins", { name, APIId }).then(response => {
            dispatch({
                type: "ADD_PREV",
                name,
                APIId,
                id: response.data._id
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export function removePrev(coinId) {
    return (dispatch) => {
        axios.delete("/coins/" + coinId).then(
            response => {
                dispatch({
                    type: "REMOVE_PREV",
                    coinId
                })
            }
        ).catch(err => {
            console.log(err);
        })
    }
}

export function getPrev() {
    return (dispatch) => {
        axios.get("/coins").then(response => {
            dispatch({
                type: "GET_PREV",
                favorites: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export default function reducer(prevState = state, action) {
    switch(action.type) {
        case "ADD_PREV":
            return {
                prevList: [...prevState.prevList,
                    {
                        name: action.name,
                        id: action.id
                    }
                ]
            }
        case "REMOVE_PREV":
            const updatedPrevList = prevState.prevList.filter(coin => {
                return coin.APIId !== action.coinId
            })
            return {
                favList: updatedPrevList
            }
        case "GET_PREV":
            return {
                prevList: action.previous
            }
        default:
            return prevState
    }
}
