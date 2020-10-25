import {connect} from 'react-redux'
import {IPanelState} from "../common/Interfaces";
import Panel2 from "./Panel2";
import {ComponentType} from "react";

const mapStateToProps = (state: IPanelState): IPanelState => {
    return {
        mineData: state.mineData
    }
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         onGenMineSubmit: (row: number, col: number) => {
//             let dataMatrix: MineCell[][] = _.range(0, row)
//                 .map((i: number) => { return _.range(0, col).map((n: number) => new MineCell(CellStatus.Default, 0, false, i, n))})
//             return dispatch(genMineData(dataMatrix))
//         }
//     }
// }


export default connect(
mapStateToProps
// mapDispatchToProps
)(Panel2 as ComponentType)

