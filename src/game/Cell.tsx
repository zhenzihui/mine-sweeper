import {CellStatus, ICellProps} from "../common/Interfaces";
import React from "react";

export const Cell = (props: ICellProps) => {
    let {onOpen, onMark} = props

    let showText = () => {
        if(props.status === CellStatus.Open) {
            return props.value
        } else if(props.status === CellStatus.Marked) {
            return "⛳"
        } else {
            return " "
        }
    }

    const onContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onMark()
    }

    return (
        <button onClick={onOpen} onContextMenu={(e) => onContextMenu(e)}>
            {showText()}
        </button>
    )

}