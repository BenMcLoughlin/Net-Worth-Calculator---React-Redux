import {combineReducers} from "redux"
import _ from "lodash"

const initialState =   {

    assets: {

        cashAndInvestment: {
            title: {
                section: "assets",
                classType: "cashAndInvestment",  
                name: "primaryResidence", 
                label: "Cash and Investments", 
                value: 0,
        
            },
            1: {
                id: 1,
                section: "assets",
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
                section: "assets",
                classType: "retirement",  
                name: "retirementTitle", 
                label: "Retirement Savings", 
                value: 0,
        
            },
            4: {
                id: 4,
                section: "assets",
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
                section: "assets",
                classType: "property",  
                name: "primaryResidence", 
                label: "Property", 
                value: 0,
        
            },
            7: {
                id: 7,
                section: "assets",
                classType: "property",  
                name: "primaryResidence", 
                min: 0, 
                max: 1000000, 
                step: 5000,
                label: "Primary Residence", 
                value: 200000,
        
            },
        }
    },
    liabilities: {

        unsecuredDebt: {
            title: {
                section: "liabilities",
                classType: "unsecuredDebt",  
                name: "unsecuredDebtTitle", 
                label: "Unsecured debt", 
                value: 0,
        
            },
            10: {
                id: 10,
                section: "liabilities",
                classType: "unsecuredDebt",  
                name: "creditCard", 
                min: 0, 
                max: 100000, 
                step: 1000,
                label: "Credit Card", 
                value: 2000,
        
            },
        },
        securedDebt: {
            title: {
                section: "liabilities",
                classType: "securedDebt",  
                name: "securedDebtTitle", 
                label: "Mortgage", 
                value: 0,
        
            },
            40: {
                id: 40,
                section: "liabilities",
                classType: "securedDebt",  
                name: "mortgage", 
                min: 0, 
                max: 100000, 
                step: 1000,
                label: "Mortgage", 
                value: 2000,
        
            },
        },
        otherDebt: {
            title: {
                section: "liabilities",
                classType: "otherDebt",  
                name: "otherDebtTitle", 
                label: "Property", 
                value: 0,
        
            },
            70: {
                id: 70,
                section: "liabilities",
                classType: "otherDebt",  
                name: "primaryResidence", 
                min: 0, 
                max: 1000000, 
                step: 5000,
                label: "Student Loan", 
                value: 2100,
        
            },
        }
    }
}


const assets = (state = initialState, action)=> {

    switch(action.type) {
        case "ADD_ITEM": return { ...state, 
                                    assets:{
                                        ...state[action.payload.section],
                                        [action.payload.classType]: {
                                            ...state[action.payload.section][action.payload.classType],
                                                 [action.payload.id]: action.payload }
                                        }
                                    }
                                        
        case "REMOVE_ITEM": return  { ...state, 
                                [action.payload.classType]: _.omit(state[action.payload.classType], action.payload.id)
                                }
      
        case "SET_VARIABLE": return {...state, 
                                         [action.payload.section]:{
                                            ...state[action.payload.section], 
                                            [action.payload.classType]: {
                                                ...state[action.payload.section][action.payload.classType],
                                                    [action.payload.event.id]: {
                                                        ...state[action.payload.section][action.payload.classType][action.payload.event.id],
                                                            value: action.payload.event.value
                                                    }
                                            }
                                        }   
                                        }
                                                             
        default: return state
    }
  
}



export default combineReducers({
    assets,

})

