import _ from "lodash"

export const addItem = (text, value, classType) => {
    return {
        type: "ADD_ITEM", 
        payload: {
            classType: classType,
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

export const removeItem = (id, classType) => {
    return {
        type: "REMOVE_ITEM", 
        payload: {
            classType: classType,
            id: id,
        }
}
}


export const setVariable = (event, classType) => {
    return {
        type: "SET_ASSET_VARIABLE",
        payload: {
            classType: classType,
            event: event
        }
    }
}

