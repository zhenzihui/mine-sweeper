import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {Button, FormControl, FormLabel, Input} from "@material-ui/core";
import {genMineData} from "../actions/MineAction";
// import {Dispatch} from 'redux'

// @ts-ignore
let GenMineForm = ({dispatch}) => {
    let inputRows: any
    let inputCols: any


    const onClick = () => {
        if(!Number.isNaN(inputRows.value) && !Number.isNaN(inputCols.value)) {
            dispatch(genMineData(inputRows.value, inputCols.value, 5))
        }
    }



    return (
        <FormControl >
            <FormLabel htmlFor={"inputRow"}>rows:</FormLabel>
            <Input id="inputRow" ref={(node: any) => inputRows = node.children[0]} />
            <FormLabel htmlFor={"inputCol"}>cols:</FormLabel>
            <Input id="inputCol" ref={(node: any) => inputCols = node.children[0]}/>
            <Button type="submit" onClick={_ => onClick()} >Submit</Button>
        </FormControl>
    )
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch: dispatch
    }
}

export default connect(null, mapDispatchToProps)(GenMineForm as ComponentType)