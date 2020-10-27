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

const getAround = (data: MineCell[][], cell: MineCell): number[][] => {
    const boundX = data.length - 1
    const boundY = data[0]? data[0].length - 1 : 0
    let [startX, startY, maxX, maxY] = [Math.max(0, cell.pX - 1), Math.max(0, cell.pY - 1),
        Math.min(boundX, cell.pX + 1), Math.min(boundY, cell.pY + 1)]
    return [
        //上方
        [startX, startY],
        [startX + 1, startY],
        [startX + 2, startY],
        //中间
        [startX + 1, startY],
        [startX + 1, startY + 2],
        //下方
        [startX + 2, startY],
        [startX + 2, startY + 1],
        [startX + 2, startY + 2],
    ].filter(([x, y]) => x <= maxX && y <= maxY && x !== cell.pX && y !== cell.pY)
}


const openCell = (data: MineCell[][], cell: MineCell): MineCell[][] => {
    let cachedData: MineCell[][] = Object.assign([], data)

    let toOpen = data.map(row => row.map(col => {
        const updateCondition = (cell.status !== CellStatus.Open && col.pX ===cell.pX && col.pY === cell.pY)
        cachedData = cachedData.filter(cRow => cRow.map(cCol => cell.pX === cCol.pX && cell.pY === cCol.pY))
        const updated = updateCondition? Object.assign(MineCell, col, {
            status: CellStatus.Open
        }): col
        return updated
    }))
    let nested = ((!cell.hasMine&& cell.mineCount === 0)? getAround(cachedData, cell): []).map(([x, y]) => cachedData[x][y])
    return nested.map((n) => openCell(toOpen, n))[nested.length - 1]

}

const genMine = (state: IPanelState = initialState, action: any): IPanelState => {
    const [x, y] = action.position? action.position: [];
    switch (action.type) {
        case Actions.Gen:
            const generated = Object.assign({}, state, {
                mineData: initMineCells(x, y, action.position[2])
            })
            console.log(generated)
            return generated
        case Actions.Open:
            const opened = openCell(state.mineData, state.mineData[action.position[0]][action.position[1]])
            console.log("opened:")
            console.log(opened)
            return Object.assign({}, state, {
                mineData: opened
            })
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