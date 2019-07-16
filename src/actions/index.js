import _ from "lodash"

export const addItem = (text, value) => {
    return {
        type: "ADD_ITEM", 
        payload: {
            classType: "netWorthAssets",
            id: (Math.random()*10000), 
            label: text,
            name: _.camelCase(text),
            max: 100000, 
            min: 0,
            type: "range", 
            value: value,
            newItem: true,
    }
}
}

export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM", 
        payload: id,
}
}


export const setVariable = (event) => {
    return {
        type: "SET_VARIABLE",
        payload: event.target
    }
}

