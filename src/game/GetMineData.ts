import { connect } from 'react-redux'
import {MineCell} from "../common/Interfaces";
import Panel from "./Panel";


const getMineData = (data: MineCell[][]) => {
    return data
}

const mapStateToProps = (state: any) => ({
    data: getMineData(state.data)
})

const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel)