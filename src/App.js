import React, { Component } from 'react'
import {connect} from "react-redux"
import {addItem, removeItem, setVariable} from "./actions"
import styled from "styled-components"


import RangeBar from "./components/RangeBar"

 class App extends Component {

    state = {
        newItem: "",
        newItemValue: 0,
    }

    handleLocalStateChange= (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }) 
      }

    addItem = () => {
        this.props.addItem(this.state.newItem, this.state.newItemValue)
        this.setState({
            newItem: "",
            newItemValue: 0,
        })
    }

    sumValues = obj => {
        const valueArray = Object.values(obj).map(a => Number(a.value))
        return valueArray.reduce((acc, num) => acc + num)
     }
     
     renderState = () => {
         Object.values(this.props.state).map( a => <p>{a.name}</p>    )
     }
    render()
    {
        console.log(this.props.state);
        return (
            <Wrapper >
                APP
               {Object.values(this.props.state).map(a =>
        
               <RangeBarWrapper key={a.id}>
                <RangeBar
                    classType={a.classType}
                    id={a.id}
                    currency={a.currency}
                    name={a.name}
                    value={a.value}
                    //handleChange={(event) => console.log(event.target)}
                    handleChange={(event) => this.props.setVariable(event)}
                    label={a.label}
                    step={a.step}
                    min={a.min}
                    max={a.max}
                    newItem={a.newItem}
                    close={() => this.props.removeItem(a.id)}
                /> 
               </RangeBarWrapper>
            
                 )}   
                <Total>Total value: ${this.sumValues(this.props.state)}</Total>
                 <p>{this.state.newItemValue}</p>
                 <Input type="text" onChange={(e) => this. handleLocalStateChange(e)} name="newItem" value={this.state.newItem}/>
                 <input type="range" onChange={(e) => this. handleLocalStateChange(e)} name="newItemValue" min={0} max={100000} step={1000}/>
                <Button onClick={() => this.addItem()}>Add Item</Button>
            </Wrapper >
        )
    }
}



const mapStateToProps = (state) => {
    return {
        state: state.reducer
    }
}

export default connect(mapStateToProps, {addItem, removeItem, setVariable})(App)

//-------------STYLES-------------------------------------------


const Wrapper = styled.div`
    font-family: 'Lato', sans-serif;
`

const Total = styled.div`
    color: #646c79;
`

const RangeBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Close = styled.div`
    background: blue;
    &:hover {
        cursor: pointer;
    }
`

const Input = styled.input`
    background-color: transparent;
    border-bottom: 1px solid grey;

`

const Button = styled.button`
    background-color: #646c79;
    color: white;
    padding: 0.4rem;
    border-radius: 3px;
    &:hover{
        cursor: pointer;
    }
`