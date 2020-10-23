export interface IPanelProps {
    rows: number;
    cols: number;
}
export interface IPanelState {
    mineData: MineCell[][];
}
export interface IPanelFormState {
    cols: number; rows: number;
    panelForm: { editedCols: number; editedRows: number }
}

//用于修改棋盘的form
export interface IPanelForm {
    editedRows: number;
    editedCols: number;
}


//一个格子
export class MineCell {
    status: number;
    mineCount: number;
    hasMine: boolean;
    pX: number;
    pY: number;


    constructor(status: number, mineCount: number, hasMine: boolean, pX: number, pY: number) {
        this.status = status;
        this.mineCount = mineCount;
        this.hasMine = hasMine;
        this.pX = pX;
        this.pY = pY;
    }
}

export interface MineActionData {
    type: number;
    data: MineCell[][];
}


export enum CellStatus {
    Default = 100,
    Open ,
    Marked ,
}

export enum Actions {
    Gen = 1000
}





