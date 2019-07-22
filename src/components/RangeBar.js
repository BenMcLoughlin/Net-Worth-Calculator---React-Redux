import React from 'react'
import styled, {css} from "styled-components"
import {Minus} from "styled-icons/evil/Minus"

const percentageHelper = (value, max) => {
    const percentageValue = value/max;
    const color = `linear-gradient(90deg, rgb(117,252,117)` + percentageValue +`%, rgba(214,214,214)` + percentageValue + `%)`;
    return color
}

function RangeBar(props) {
    return (
        <RangebarContainerStyled>
            <RangeBarValueStyled 
                type="number" 
                value={props.value}
                name={props.name}
                id={props.id}
                onChange={props.handleChange}
                ></RangeBarValueStyled>
        
            <RangeBarStyled
                type="range"
                classType={props.classType}
                section={props.section}
                id={props.id}
                currency={props.currency}
                name={props.name}
                value={props.value}
                label={props.label}
                min={props.min}
                max={props.max}
                step={props.value < 1000 ? 100 : props.value < 100000 ? 1000 : props.value < 100000 ? 10000 : 1}
                percentage={props.percentage}
                onChange={props.handleChange}
                />
            
        

        <RangeBarLabelStyled>{props.label}</RangeBarLabelStyled>
    </RangebarContainerStyled>
    )
}


export default RangeBar

export const RangebarContainerStyled = styled.div `
    margin-top: 1rem;
    position: relative;
    padding-left: 1rem;
    width: 25rem;
`

export const RangeBarValueStyled = styled.input`
        position: absolute;
        left: 100%;
        border-radius: 1px;
        padding: .6rem;
        height: 1.3rem;
        font-size: ${props => props.theme.fontSize.smallest};
        width: 7rem;
        align-content: center;
        text-align: center;
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${props => props.theme.color.background3};
        z-index: 23;
        outline: none;
        ::-webkit-inner-spin-button, 
        ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
}
        &:before {
            content: "";
            height: 1rem;
            width: 1rem;
            background: ${props => props.theme.color.background3};
            position: absolute;
            transform: rotate(45deg);
            left: -.5rem;
        };
        &:focus {
           border-bottom: 3px solid ${props => props.theme.color.highlight1};
           
        }

`
/*
1. &:active + RangeBarValueStyled 
2. &:active + ~ ${RangeBarValueStyled}

*/

export const RangeBarStyled = styled.input`

    width: 200px;
    height: 3px;
    -webkit-appearance: none;
    background: linear-gradient(90deg, 
        ${props => props.section === "assets" ? props.theme.color.highlight1 : props.theme.color.highlight2} ${props => props.percentage}, 
        ${props => props.theme.color.highlight3} ${props => props.percentage});
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    border-radius: 12px;
    margin-top: 1.3rem;
    margin-bottom: 2rem;
    transition: all 1s ease;
    &:after {
        content: "";
            top: 1.8rem;
            right: -31%;
            height: 1rem;
            width: 8rem;
            background: transparent;
            position: absolute;
            z-index: 3;
    }
    &:active   {
        &:after{
            background: ${props => props.section === "assets" ? props.theme.color.highlight1 : props.theme.color.highlight2};
        }
 
        }

    

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: ${props => props.theme.color.highlight3};
    border-radius: 50%;
    cursor: pointer;
}

&:active::-webkit-slider-thumb
{
    background: ${props => props.section === "assets" ? props.theme.color.highlight1 : props.theme.color.highlight2};
}

`




export const RangeBarLabelStyled = styled.div`
        font-size: ${props => props.theme.fontSize.small};
        color: ${props => props.theme.color.background3};
        position: absolute;
        top: -.6rem;
        left: 3rem;
        text-transform: capitalize;

`

const Close = styled(Minus)`
    color: ${props => props.theme.color.background4};
    height: 1.5rem;
    width: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`
