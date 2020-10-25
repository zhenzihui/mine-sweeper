import React from "react";
import {MineCell} from "../common/Interfaces";
import {Paper, Table, TableCell, TableContainer, TableRow} from "@material-ui/core";

const Panel2 = (mines: MineCell[][]) => {
    let data = Array.from(mines)
    return (
        <div>
            <Table>
                <TableContainer component={Paper}>
                    {
                        data.map((cols: MineCell[]) => (
                            <TableRow>
                                {
                                    cols.map((item: MineCell) => (
                                        <TableCell>
                                            {item.pX},{item.pY}
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

export default Panel2