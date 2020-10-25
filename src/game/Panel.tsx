import React, {Component} from "react";
import {CellStatus, IPanelState, MineCell} from "../common/Interfaces";
import {Paper, Table, TableCell, TableContainer, TableRow} from "@material-ui/core";
import _ from 'lodash';
class Panel extends Component<any, IPanelState>{

    render() {

        let dataMatrix: MineCell[][] = _.range(0, this.props.rows)
            .map((i: number) => { return _.range(0, this.props.cols).map((n: number) => new MineCell(CellStatus.Default, 0, false, i, n))})

        return (
            <div>
                <Table>
                    <TableContainer component={Paper}>
                    {
                        dataMatrix.map((cols: MineCell[]) => (
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

}
export default Panel