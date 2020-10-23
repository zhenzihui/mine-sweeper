import React, {Component} from "react";
import {IPanelState} from "../common/Interfaces";
import {Paper, Table, TableCell, TableContainer, TableRow} from "@material-ui/core";
import _ from 'lodash';
class Panel extends Component<any, IPanelState>{

    render() {



        let dataMatrix: number[][] = _.range(0, this.props.rows)
            .map((i: number) => { return _.range(0, this.props.cols).map((n: number) => Math.round(Math.random() * 1000)%2)})

        return (
            <div>
                <Table>
                    <TableContainer component={Paper}>
                    {
                        dataMatrix.map((cols: number[]) => (
                            <TableRow>
                                {
                                    cols.map((item: number) => (
                                        <TableCell>
                                            {item}
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