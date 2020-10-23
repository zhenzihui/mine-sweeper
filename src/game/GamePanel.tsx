import React, {Component} from "react";
import Panel from "./Panel";
import {Button, FormControl, FormLabel, Input} from "@material-ui/core";
import {IPanelFormState} from "../common/Interfaces";

class GamePanel extends Component<any, IPanelFormState> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = { cols: 9, rows: 9, panelForm: { editedCols: 9, editedRows: 9 } }
    }

    render() {
        let handleChangeForm = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            let copiedForm = this.state.panelForm
            let element = e.target
            switch (element.id) {
                case "inputRow":
                    if(!Number.isNaN(+element.value)) {
                        copiedForm.editedRows = +element.value
                    }
                    break;
                case "inputCol":
                    if(!Number.isNaN(+element.value)) {
                        copiedForm.editedCols = +element.value
                    }
                    break;
            }
            this.setState({ panelForm: copiedForm})
        }
        const handleClick = () => {
            this.setState({ cols: this.state.panelForm.editedCols, rows: this.state.panelForm.editedRows})
        }


        return (
            <div>
                <Panel/>
                <FormControl >
                    <FormLabel htmlFor={"inputRow"}>rows:</FormLabel>
                    <Input id="inputRow" value={this.state.panelForm.editedRows} onChange={(e) => handleChangeForm(e)} />
                    <FormLabel htmlFor={"inputCol"}>cols:</FormLabel>
                    <Input id="inputCol" value={this.state.panelForm.editedCols} onChange={(e) => handleChangeForm(e)}/>
                    <Button type="submit" onClick={() => handleClick()} >Submit</Button>
                </FormControl>

            </div>
        );
    }
}



export default GamePanel