import React from "react";
import {IPanelProps, MineCell} from "../common/Interfaces";
import {Paper, Table, TableCell, TableContainer, TableRow} from "@material-ui/core";
import {Cell} from "./Cell";

const Panel = (props: IPanelProps) => {
    const { mineData, onOpen, onMark } = props
    let data: MineCell[][] = Array.from(mineData)

    return (
        <div>
            <Table>
                <TableContainer component={Paper}>
                    {
                        data.map((rows: MineCell[]) => (
                            <TableRow>
                                {
                                    rows.map((col: MineCell) => (
                                        <TableCell>
                                        <Cell onOpen={() => onOpen(col.pX, col.pY)} onMark={() => onMark(col.pX, col.pY)}
                                              value={col.hasMine? "B": col.mineCount.toString()} status={col.status} />
                                        </TableCell>
                                    ))
                                }

                            </TableRow>
                        ))
                    }
                </TableContainer>
            </Table>
        </div>
    )
}

export default Panel