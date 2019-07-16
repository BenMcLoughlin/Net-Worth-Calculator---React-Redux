import {combineReducers} from "redux"
import _ from "lodash"

const initialState =   {
    1: {
        id: 1,
        classType: "netWorthAssets", 
        type: "range", 
        name: "primaryResidence", 
        min: 0, 
        max: 100000, 
        step: 1000,
        label: "Primary Residence", 
        value: 200000,

    },
    2: {
        id: 2,
        classType: "netWorthAssets", 
        type: "range", 
        name: "vehicle", 
        min: 0, 
        max: 100000, 
        label: "vehicle", 
        value: 22000,
    },
    3: {
        id: 3,
        classType: "netWorthAssets", 
        type: "range", 
        name: "hat", 
        min: 0, 
        max: 100000, 
        label: "hat",
        value: 200,
    }

}


const reducer = (state = initialState, action)=> {

    switch(action.type) {
        case "ADD_ITEM": return { ...state, [action.payload.id]: action.payload }
        case "REMOVE_ITEM": return  _.omit(state, action.payload) 
        case "SET_VARIABLE": return {...state, [action.payload.id]: {...state[action.payload.id], value: action.payload.value}}
        default: return state
    }
  
}

export default combineReducers({
    reducer
})

