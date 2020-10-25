import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {Button, FormControl, FormLabel, Input} from "@material-ui/core";
import {genMineData} from "../actions/MineAction";
import {CellStatus, MineCell} from "../common/Interfaces";
import _ from "lodash";
// import {Dispatch} from 'redux'

// @ts-ignore
let GenMineForm = ({dispatch}) => {
    let inputRows: any
    let inputCols: any


    const onClick = () => {
        if(Number.isNaN(inputRows.value) || Number.isNaN(inputCols.value))
            return

        let dataMatrix: MineCell[][] = _.range(0, +inputRows.value)
            .map((i: number) => { return _.range(0, +inputCols.value)
                .map((n: number) => new MineCell(CellStatus.Default, 0, false, i, n))})
        dispatch(genMineData(dataMatrix))

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