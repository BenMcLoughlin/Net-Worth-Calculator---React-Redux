import React from 'react'
import styled, {css} from "styled-components"


function RangeBar(props) {
    return (
        <RangebarContainerStyled>
        <RangeBarStyled
            type="range"
            classType={props.classType}
            id={props.id}
            currency={props.currency}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            label={props.label}
            step={props.step}
            min={props.min}
            max={props.max}
            newItem={props.newItem}
            step={props.value < 1000 ? 100 : props.value < 100000 ? 1000 : props.value < 100000 ? 10000 : 1}
            />
            <Close onClick={props.close}>x</Close>
        <RangeBarValueStyled>{props.value}</RangeBarValueStyled>
        
        <RangeBarLabelStyled>{props.label}</RangeBarLabelStyled> 
    </RangebarContainerStyled>
    )
}


export default RangeBar

export const RangebarContainerStyled = styled.div `
    margin-top: 2rem;
    position: relative;
    padding-left: 1rem;
    width: 25rem;
` 


export const RangeBarStyled = styled.input`

    height: 2.8rem;
    -webkit-appearance: none;
    outline: none;
    background-color: transparent;
    transition: all .3s;
    -webkit-appearance: none;
    width: 18rem;
    &:active + &__value {
        box-sizing: border-box;
        border-bottom: 4px solid #588ca5;
        z-index: 1;
    }


&::-webkit-slider-runnable-track{

    background-color: #588ca5;
    height: 3px; //track width
    border-radius: 4px;
    z-index: 2;
}

&:active::-webkit-slider-runnable-track {
    background-color: #588ca5;
    z-index: 2;
}

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #588ca5;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    margin-top: -1rem; //thumbheight
    cursor: pointer;
    border: 2px solid #fff;
    transition: .3s;
    z-index: 2;
}
&:active::-webkit-slider-thumb  {
    background-color: red;
    z-index: 2;;
}

`

export const RangeBarValueStyled = styled.div`
        position: absolute;
        top: -2rem;
        left: 21rem;
        border-radius: 1px;
        background-color: #272f33;
        padding: .8rem;
        height: 2rem;
        font-size: 1rem;
        width: 3rem;
        align-content: center;
        text-align: center;
        right: 4rem;
        z-index: 1;
        color: white;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;

`

export const RangeBarLabelStyled = styled.div`
        color: #646c79;
        font-size: 1.2rem;
        position: absolute;
        top: -1.2rem;
        left: 3rem;
        text-transform: capitalize;
`

const Close = styled.div`
    color: #646c79;
    position: absolute;
    top: -1.8rem;
    right: -0.5rem;
    &:hover {
        cursor: pointer;
    }
`