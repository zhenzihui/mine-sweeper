import {Actions, MineCell} from "../common/Interfaces";

export const genMineData = (mines: MineCell[][]) =>  {
    return {
        type: Actions.Gen,
        data: mines
    }
}