import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import GamePanel from "./game/GamePanel";
function App() {
    return (
    <Container fixed>
        <GamePanel/>
    </Container>

  );
}


export default App;
