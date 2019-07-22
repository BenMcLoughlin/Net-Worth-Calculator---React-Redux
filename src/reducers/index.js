import {combineReducers} from "redux"
import _ from "lodash"

const initialStateAssets =   {

    cashAndInvestment: {
        title: {
            classType: "cashAndInvestment",  
            name: "primaryResidence", 
            label: "Cash and Investments", 
            value: 0,
    
        },
        1: {
            id: 1,
            classType: "cashAndInvestment",  
            name: "primaryResidence", 
            min: 0, 
            max: 100000, 
            step: 1000,
            label: "Primary Residence", 
            value: 200000,
    
        },
    },
    retirement: {
        title: {
            classType: "retirement",  
            name: "retirementTitle", 
            label: "Retirement Savings", 
            value: 0,
    
        },
        4: {
            id: 4,
            classType: "retirement",  
            name: "tfsa", 
            min: 0, 
            max: 100000, 
            step: 1000,
            label: "TFSA", 
            value: 200000,
    
        },
    },
    property: {
        title: {
            classType: "property",  
            name: "primaryResidence", 
            label: "Property", 
            value: 0,
    
        },
        7: {
            id: 7,
            classType: "property",  
            name: "primaryResidence", 
            min: 0, 
            max: 1000000, 
            step: 5000,
            label: "Primary Residence", 
            value: 200000,
    
        },
    }



}


const assets = (state = initialStateAssets, action)=> {

    switch(action.type) {
        case "ADD_ITEM": return { ...state, 
                                        [action.payload.classType]: {
                                            ...state[action.payload.classType],
                                                 [action.payload.id]: action.payload }
                                        }
        case "REMOVE_ITEM": return  { ...state, 
                                [action.payload.classType]: _.omit(state[action.payload.classType], action.payload.id)
                                }
      
        case "SET_VARIABLE": return {...state, 
                                                [action.payload.classType]: {
                                                    ...state[action.payload.classType],
                                                        [action.payload.event.id]: {
                                                            ...state[action.payload.classType][action.payload.event.id],
                                                                value: action.payload.event.value
                                                        }
                                                }
                                            }                 
        default: return state
    }
  
}

const initialStateLiabilities =   {

    cashAndInvestment: {
        title: {
            classType: "cashAndInvestment",  
            name: "primaryResidence", 
            label: "Cash and Investments", 
            value: 0,
    
        },
        1: {
            id: 1,
            classType: "cashAndInvestment",  
            name: "primaryResidence", 
            min: 0, 
            max: 100000, 
            step: 1000,
            label: "Primary Residence", 
            value: 200000,
    
        },
    },
    retirement: {
        title: {
            classType: "retirement",  
            name: "retirementTitle", 
            label: "Retirement Savings", 
            value: 0,
    
        },
        4: {
            id: 4,
            classType: "retirement",  
            name: "tfsa", 
            min: 0, 
            max: 100000, 
            step: 1000,
            label: "TFSA", 
            value: 200000,
    
        },
    },
    property: {
        title: {
            classType: "property",  
            name: "primaryResidence", 
            label: "Property", 
            value: 0,
    
        },
        7: {
            id: 7,
            classType: "property",  
            name: "primaryResidence", 
            min: 0, 
            max: 1000000, 
            step: 5000,
            label: "Primary Residence", 
            value: 200000,
    
        },
    }



}


const liabilities = (state = initialStateLiabilities, action)=> {

    switch(action.type) {
        case "ADD_ITEM": return { ...state, 
                                        [action.payload.classType]: {
                                            ...state[action.payload.classType],
                                                 [action.payload.id]: action.payload }
                                        }
        case "REMOVE_ITEM": return  { ...state, 
                                [action.payload.classType]: _.omit(state[action.payload.classType], action.payload.id)
                                }
      
        case "SET_VARIABLE": return {...state, 
                                                [action.payload.classType]: {
                                                    ...state[action.payload.classType],
                                                        [action.payload.event.id]: {
                                                            ...state[action.payload.classType][action.payload.event.id],
                                                                value: action.payload.event.value
                                                        }
                                                }
                                            }                 
        default: return state
    }
  
}



export default combineReducers({
    assets,
    liabilities

})

