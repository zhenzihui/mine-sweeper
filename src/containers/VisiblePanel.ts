import {connect} from 'react-redux'
import {IPanelState} from "../common/Interfaces";
import Panel from "../game/Panel";
import {ComponentType} from "react";
import {markCell, openCell} from "../actions/MineAction";

const mapStateToProps = (state: IPanelState): IPanelState => {
    return {
        mineData: state.mineData
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onOpen: (x: number, y: number) => {
            dispatch(openCell(x, y))
        },
        onMark: (x: number, y: number) => {
            dispatch(markCell(x, y))
        }
    }
}


export default connect(
mapStateToProps,
mapDispatchToProps
)(Panel as ComponentType)

