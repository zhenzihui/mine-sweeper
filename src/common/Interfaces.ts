export interface IPanelProps {
    mineData: MineCell[][];
    onOpen: Function;
    onMark: Function;
}
export interface IPanelState {
    mineData: MineCell[][];
}

export interface ICellProps {
    onOpen: any;
    onMark: any;
    value: String;
    status: number;
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


export enum CellStatus {
    Default = 100,
    Open ,
    Marked ,
    Disabled
}

export enum Actions {
    Gen = 1000,
    Open,
    Mark,
    Update
}





