import React from "react";
import VisiblePanel from "../containers/VisiblePanel";
import GenMineForm from "./GenMineForm";

function GamePanel() {
    return (
        <div>
            <VisiblePanel/>
            <GenMineForm/>
        </div>
    );
}


export default GamePanel