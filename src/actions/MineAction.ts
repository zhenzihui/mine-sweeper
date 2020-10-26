import {Actions, CellStatus} from "../common/Interfaces";

export const genMineData = (x: number, y: number, count: number) =>  {
    return {
        type: Actions.Gen,
        position: [x,y,count]
    }
}

export const openCell = (x: number, y: number) => {
    return {
        type: Actions.Update,
        position: [x,y],
        status: CellStatus.Open
    }
}

export const markCell = (x: number, y: number) => {
    return {
        type: Actions.Update,
        position: [x,y],
        status: CellStatus.Marked
    }
}