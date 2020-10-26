import {Actions, CellStatus, IPanelState, MineCell} from "../common/Interfaces";
import _ from "lodash";

let initialState: IPanelState = {
    mineData: [] as MineCell[][]
}

const initMineCells = (x: number, y: number, mineCount: number) => {
    let lastCount = mineCount
    let dataMatrix: MineCell[][] = _.range(0, x)
        .map((i: number) => { return _.range(0, y)
            .map((n: number) => {
               let hasMine = Math.floor(Math.random() * 10000) % 17 === 0;
               if(hasMine) {
                   lastCount--
               }
               return new MineCell(CellStatus.Default, 0, hasMine && lastCount > 0, i, n)})
        })
    return initCellsWithMineCount(dataMatrix)
}

const initCellsWithMineCount = (data: MineCell[][]): MineCell[][] => {
    const boundX = data.length - 1
    const boundY = data[0]? data[0].length - 1 : 0
    const scanAround = (cell: MineCell) => {
        let [startX, startY, maxX, maxY] = [Math.max(0, cell.pX - 1), Math.max(0, cell.pY - 1),
            Math.min(boundX, cell.pX + 1), Math.min(boundY, cell.pY + 1)]
        return _.range(startX, maxX + 1)
            .flatMap(x => _.range(startY, maxY + 1).map(y => data[x][y]))
            .filter(aCell => aCell.hasMine).length
    }
    return data.map(row => row.map(cell => {
        return {
            ...cell,
            mineCount: scanAround(cell)
        }
    }))
}

// const openCell = (data: MineCell[][], cell: MineCell): MineCell[][] => {
//     data.flatMap(row => row.map(col => {
//         const updateCondition = cell.status !== CellStatus.Open && col.pX ===cell.pX && col.pY === cell.pY
//         const updated = updateCondition? {
//             ...cell,
//             status: CellStatus.Open
//         }: col
//     }))
// }

const genMine = (state: IPanelState = initialState, action: any): IPanelState => {
    const [x, y] = action.position? action.position: [];
    switch (action.type) {
        case Actions.Gen:
            return Object.assign({}, state, {
                mineData: initMineCells(x, y, action.position[2])
            })
        // case Actions.Open:
        //     const opened = state.mineData.map(row => row.map(col => {
        //         let updateCondition = col.pX === x && col.pY === y
        //         return updateCondition? openCell(col): col
        //     }))
        //     return Object.assign({}, state, {
        //         mineData: opened
        //     })
        case Actions.Update:
            let updated = state.mineData.map(row => row.map(col => {
                let updateCondition = col.pX === x && col.pY === y
                && col.status !== CellStatus.Open
                return updateCondition? {
                    ...col,
                    status: action.status
                } : col
            }))
            return Object.assign({}, state, {
                mineData: updated
            })
        default:
            return state
    }
}

const MineApp = genMine

export default MineApp