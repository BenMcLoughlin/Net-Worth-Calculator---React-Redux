import _ from "lodash"

export const addItem = (text, value, section, classType) => {
    return {
        type: "ADD_ITEM", 
        payload: {
            section: section,
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


export const setVariable = (event, section, classType) => {
    return {
        type: "SET_VARIABLE",
        payload: {
            section: section, 
            classType: classType,
            event: event
        }
    }
}

