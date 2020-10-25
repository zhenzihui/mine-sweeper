import {Actions, IPanelState, MineActionData, MineCell} from "../common/Interfaces";
import { combineReducers } from 'redux'
let initialState: IPanelState = {
    mineData: [] as MineCell[][]
}


const genMine = (state: IPanelState = initialState, action: MineActionData) => {
    switch (action.type) {
        case Actions.Gen:
            return Object.assign({}, state, {
                mineData: action.data
            })
        default:
            return state
    }
}

const MineApp = combineReducers({
    genMine
})


export default MineApp