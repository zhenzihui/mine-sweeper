import {Actions, MineActionData, MineCell} from "../common/Interfaces";

export const genMineData = (mines: MineCell[][]) =>  {
    return {
        type: Actions.Gen,
        date: mines
    }
}