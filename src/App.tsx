import React from 'react';
import './App.css';
import GamePanel from './game/Game';
import {Container} from "@material-ui/core";
function App() {
    return (
    <Container fixed>
        <GamePanel rows={9} cols={9} />
    </Container>

  );
}

export default App;
