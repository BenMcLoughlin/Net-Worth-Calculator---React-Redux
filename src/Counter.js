import React from 'react'
import { connect } from 'react-redux'


 function Counter(props) {
    return (
        <div>
            <div >
                <h1 className="">Hi I'm A counter</h1>
                <p>Count: {props.count}</p>
                <button onClick={props.onIncrementClick}>Increment</button>
            </div>

        </div>
    )
}


function mapStateToProps(state){
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onIncrementClick: () => {
            const action = {type: "INCREMENT"}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)