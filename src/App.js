import React, { Component } from 'react'
import Counter from "./Counter"
import store from "./store"

export default class App extends Component {
    render() {
        return (
            <div>
               <Counter
                   store={store}
               />

            </div>
        )
    }
}
