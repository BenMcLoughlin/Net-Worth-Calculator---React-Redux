import React, { Component } from 'react'
import {connect} from "react-redux"
import {addItem, removeItem, setVariable} from "./actions"
import styled, {keyframes, css} from "styled-components"
import RangeBar from "./components/RangeBar"
import {ThemeProvider} from "styled-components"
import {darkTheme} from "./Styles"
import {KeyboardArrowRight} from "styled-icons/material/KeyboardArrowRight"
import {Plus} from "styled-icons/evil/Plus"
import {Home} from "styled-icons/icomoon/Home"
import {LineChart} from "styled-icons/boxicons-regular/LineChart"
import {MoneyBillAlt} from "styled-icons/fa-regular/MoneyBillAlt"
import AddContainer from "./components/AddContainer"



class App extends Component {

    state = {
        cashAndInvestmentAddText: "",
        retirementAddText: "",
        propertyAddText: "",
        cashAndInvestmentValue: 0,
        retirementValue: 0,
        propertyValue: 0,
        cashAndInvestmentAddButtonHidden: true,
        retirementAddButtonHidden: false,
        propertyAddButtonHidden: true,
        cashAndInvestment: true,
        retirement: false,
        property: false,
    }

    handleLocalStateChange= (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }) 
      }

    toggleItem = (event) => {
        const show = this.state[event.target.name]
        this.setState({
            [event.target.name]: !show,
        })
        console.log(this.state.addItemHidden)
    }

    addItem = (classType) => {
        this.props.addItem(this.state[`${classType}AddText`], this.state[`${classType}Value`], classType)
        this.setState({
            [`${classType}AddText`]: "",
            [`${classType}Value`]: 0,
            [`${classType}AddButtonHidden`]: false,
        })
    }

    sumValues = obj => {
        const valueArray = Object.values(obj).map(a => Number(a.value))
        return valueArray.reduce((acc, num) => acc + num)
     }

     renderRangeBars(state, classType) {
       return (
           <div className="">
           {Object.values(state).map(a =>
                a.id !== undefined ?
                <RangeBarWrapper key={a.id}>
                <RangeBar
                    classType={a.classType}
                    id={a.id}
                    currency={a.currency}
                    name={a.name}
                    value={a.value}
                    handleChange={(event) => this.props.setVariable(event.target, a.classType)}
                    label={a.label}
                    step={a.step}
                    min={a.min}
                    max={a.max} 
                    newItem={a.newItem}
                    close={() => this.props.removeItem(a.id, a.classType)}
                    percentage={`${a.value/a.max * 100}%`}
                /> 
                </RangeBarWrapper>
                :
                null
              )}  
              {
                this.state[`${classType}AddButtonHidden`] ? 
                <div className="addItemHidden">
                <AddContainer 
                    handleChange={(e) => this. handleLocalStateChange(e)}
                    textName={`${classType}AddText`} 
                    textValue={this.state[`${classType}AddText`]}
                    rangeName={`${classType}Value`}
                    rangeValue={this.state[`${classType}Value`]}
                    percentage={`${this.state[`${classType}Value`]/100000 * 100}%`}
                    addItem={() => this.addItem(classType)}
                />

             </div>
             
                :
                <AddButton name={`${classType}AddButtonHidden`} onClick={(event)=> this.toggleItem(event)}> <PlusIcon/> New Item</AddButton>
                
             }
           </div>
       )
     }

     renderNetWorth (netWorthState) {
        return Object.values(netWorthState).map( a => 
            <Container>
                <Header onClick={(event) => this.toggleItem(event)}>
                    <Button name={a.title.classType} > 
                        <Arrow open={this.state[a.title.classType]}/> 
                        {a.title.classType === "property" ? <HomeIcon/> : a.title.classType === "retirement" ? <Chart/> : <Dollar/>}
                       {a.title.label}
                    </Button>
                    <CatagoryTotal onClick={(event) => this.toggleItem(event)}>${this.sumValues(netWorthState[a.title.classType]).toLocaleString()}</CatagoryTotal>
                </Header>

                <Expanded open={this.state[a.title.classType]}>
                {this.renderRangeBars(netWorthState[a.title.classType], a.title.classType)}
                </Expanded>
            </Container>
        )
     }

    render()
    {
        return (
            <ThemeProvider theme={darkTheme}>
            <Wrapper >
            <Heading> <span>Assets</span> <SubHeading>What You Own</SubHeading></Heading>
                 {this.renderNetWorth(this.props.netWorthAssetsState)}
            </Wrapper >
            </ThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        netWorthAssetsState: state.assets,
    }
}

export default connect(mapStateToProps, {addItem, removeItem, setVariable})(App)

//-------------STYLES-------------------------------------------

const Heading = styled.div`
    color: ${props => props.theme.color.background2};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    span {
        font-size: ${props => props.theme.fontSize.medium}
    }
`
const SubHeading = styled.div`
    margin-left: 2rem;
`

const Wrapper = styled.div`
    margin: 10rem auto;
    font-family: 'Lato', sans-serif;
    width: 100rem;
    background-color: ${props => props.theme.color.background4};
    color: ${props => props.theme.color.text1};
    padding: 4rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
   
`
const Container = styled.div`
    width: 40%;
    background-color: ${props => props.theme.color.background2};
    overflow: hidden;
`

const Total = styled.div`
    color: #646c79;
`

const RangeBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
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

const AddRadio = styled.input`
    background: blue;

`

const animationOpen = keyframes`
  0% { max-height: 0rem; }
  100% { max-height: 100rem; }
`
const animationClose = keyframes`
  0% { max-height: 100rem; }
  100% { max-height: 0rem; }
`

const Expanded = styled.div`
  animation: ${animationOpen} 0.9s 0s both;
  overflow: hidden;
  background-color: ${props => props.theme.color.background4};
  border: 1px solid  ${props => props.theme.color.background3};

  ${ props => !props.open && css`
     animation: ${animationClose} 0.4s 0s both;
  `};
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.background3};
    border-bottom: 1px solid white;
    padding: 1rem;
`
const CatagoryTotal = styled.div`
    font-size: ${props => props.theme.fontSize.small};
    margin-top: -.3rem;

`

const Arrow = styled(KeyboardArrowRight)`
    height: 2rem;
    width: 2rem;
    color: white;
    transition: all .2s ease-in;
    transform: ${props => props.open ? "rotate(90deg)" : null };
`
const PlusIcon = styled(Plus)`
    height: 2rem;
    width: 2rem;
    color: white;
`
const HomeIcon = styled(Home)`
    height: 1.3rem;
    width: 1.3rem;
    color: white;
    margin-right: 1rem;
`

const Chart = styled(LineChart)`
    height: 1.3rem;
    width: 1.3rem;
    color: white;
    margin-right: 1rem;
`
const Dollar = styled(MoneyBillAlt)`
    height: 1.3rem;
    width: 1.3rem;
    color: white;
    margin-right: 1rem;
`