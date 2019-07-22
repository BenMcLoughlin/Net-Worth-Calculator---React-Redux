import React, { Component } from 'react'
import styled, {css} from "styled-components"
import RangeBar from "./RangeBar"
import {Edit} from "styled-icons/feather/Edit"
import {Plus} from "styled-icons/evil/Plus"

const percentageHelper = (value, max) => {
    const percentageValue = value/max;
    const color = `linear-gradient(90deg, rgb(117,252,117)` + percentageValue +`%, rgba(214,214,214)` + percentageValue + `%)`;
    return color
}





class AddContainer extends Component {

    state = {
        TFSA: true,
        RRSP: false
    }
    render() {
    return (
        <Container>
        <TextInputContainer>
        <Pencil/>
        <TextInput 
            type="text" 
            onChange={this.props.handleChange} 
            placeholder={"Asset Name"} 
            name={this.props.textName} 
            value={this.props.textValue}
            autocomplete="off"
            />

    </TextInputContainer>
    <RangeBar 
        type="range" 
        handleChange={this.props.handleChange} 
        name={this.props.rangeName} 
        value={this.props.rangeValue}
        min={0} 
        max={100000} 
        step={1000} 
        percentage={this.props.percentage}
        />
    <AddButton onClick={this.props.addItem}> <PlusIcon/>Add</AddButton>
    </Container>
    )
    }
}

export default AddContainer
//-------------STYLES-------------------------------------------


const TextInputContainer = styled.div`
    display: inline;
    position: relative;
    top: 1.6rem;
    left: 1rem;
    

`

const Pencil = styled(Edit)`
    height: 1.2rem;
    width: 1.2rem;
    color: grey;
    position: absolute;
    right: .2rem;
    top: 0.1rem;
`

const TextInput = styled.input`
    background-color: white;
    outline: none;
    border: none;
    padding: .7rem;
    width: 50%;
    z-index: 2;
    border-radius: 4px;

`

const Container = styled.div`
    width: 93%;
    height: 11rem;
    position: relative;
    border: 1px solid white;
    border-radius: 3px;
    margin-left: 1rem;
    margin-bottom: 1rem;
    background-color: ${props => props.theme.color.background2}
`

const Button = styled.button`
    background-color: #646c79;
    color: white;
    border-radius: 3px;
    transition: all .2s ease;
    &:hover {
        cursor: pointer;
    }

    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.color.text1};
    background: transparent;
    width: 80%;
    text-align: left;
    text-transform: uppercase;
    border: none;
    outline: none;
`

const AddButton = styled(Button)`
    border: 1px solid white;
    width: 30%;
    height: 2.5rem;
    margin-left: 2rem;
    font-size: ${props => props.theme.fontSize.smallest};
    margin-bottom: 1.5rem;
    color: white;
    background-color: ${props => props.theme.color.background3};
`

const PlusIcon = styled(Plus)`
    height: 2rem;
    width: 2rem;
    color: white;
`
